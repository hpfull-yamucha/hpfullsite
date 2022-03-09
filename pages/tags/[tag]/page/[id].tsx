import React, { useMemo } from "react";
import {
  getBlog,
  getAllTag,
  getSpecificTag,
  getLatestBlog,
  getSortedAndLimitedTag,
} from "libs/client";
import { Layout } from "../../../../components/Layout";
import { Blog } from "../../../../components/Blog";
import { Pagination } from "../../../../components/Pagination";
import { Tag as TagType, Blog as BlogType } from "../../../../types";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { MobileBlog } from "../../../../components/MobileBlog";
import useMedia from "use-media";
import { SidebarWrapLayout } from "components/SidebarWrapLayout";

interface Props {
  blogs: BlogType[];
  tag: TagType;
  blogTotalCount: number;
  currentPageNumber: number;
  sortedAndLimitedTag: TagType[];
  latestDataBlog: BlogType[];
}

const PER_PAGE = 8;

export const TagPageId: NextPage<Props> = (props: Props) => {
  const {
    blogs,
    tag,
    blogTotalCount,
    currentPageNumber,
    sortedAndLimitedTag,
    latestDataBlog,
  } = props;
  const isWide = useMedia({ minWidth: "700px" });

  const memorizedBlogList = useMemo(
    () => (
      <>
        <Blog blog={blogs} />
        <Pagination
          currentPageNumber={currentPageNumber}
          maxPageNumber={Math.ceil(blogTotalCount / PER_PAGE)}
          whatPage={"tags"}
          tagId={tag.id}
        />
      </>
    ),
    [blogs, blogTotalCount, currentPageNumber, tag]
  );

  const BlogWithSidebar = useMemo(() => {
    return isWide ? (
      <SidebarWrapLayout
        latestDataBlog={latestDataBlog}
        sortedAndLimitedTag={sortedAndLimitedTag}
      >
        {memorizedBlogList}
      </SidebarWrapLayout>
    ) : (
      <div className="flex flex-col justify-center items-center">
        <MobileBlog blog={blogs} />
        <Pagination
          currentPageNumber={currentPageNumber}
          maxPageNumber={Math.ceil(blogTotalCount / PER_PAGE)}
          whatPage={"tags"}
          tagId={tag.id}
        />
      </div>
    );
  }, [
    blogs,
    isWide,
    latestDataBlog,
    sortedAndLimitedTag,
    blogTotalCount,
    memorizedBlogList,
    currentPageNumber,
    tag,
  ]);

  return (
    <Layout>
      <>
        <div className="flex mt-12">
          <p className="text-3xl text-blue-500">#{tag.name}</p>
          <p className="text-3xl text-black mb-4">一覧</p>
        </div>
        {BlogWithSidebar}
      </>
    </Layout>
  );
};

// 静的生成のためのパスを指定します
export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await getAllTag();

  const resPaths = await Promise.all(
    tags.contents.map((tag: TagType) => {
      const filters = `tags[contains]${tag.id}`;
      const result = getBlog({ filters: filters }).then(({ totalCount }) => {
        const range = (start, end) =>
          [...Array(end - start + 1)].map((_, i) => start + i);

        return range(1, Math.ceil(totalCount / 4)).map(
          (i) => `/tags/${tag.id}/page/${i}`
        );
      });
      return result;
    })
  );
  const paths = resPaths.flat();
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (
  context
): Promise<{
  props: Props;
}> => {
  const numId = Number(context.params?.id);
  const tagId = context.params?.tag;
  const offset = (numId - 1) * PER_PAGE;
  const filters = `tags[contains]${tagId}`;
  const data = await getBlog({
    offset: offset,
    limit: PER_PAGE,
    filters: filters,
  });
  const tag = typeof tagId === "string" ? await getSpecificTag(tagId) : null;

  const sortedAndLimitedTag = await getSortedAndLimitedTag();

  const latestDataBlog = await getLatestBlog();

  return {
    props: {
      blogs: data.contents,
      blogTotalCount: Number(data.totalCount),
      currentPageNumber: numId,
      tag: tag,
      sortedAndLimitedTag: sortedAndLimitedTag,
      latestDataBlog: latestDataBlog.contents,
    },
  };
};

export default TagPageId;
