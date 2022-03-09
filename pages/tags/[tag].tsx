import React, { useMemo } from "react";
import {
  getAllTag,
  getBlog,
  getSpecificTag,
  getLatestBlog,
  getSortedAndLimitedTag,
} from "libs/client";
import { Layout } from "../../components/Layout";
import { Blog } from "../../components/Blog";
import { Pagination } from "../../components/Pagination";
import { Tag as TagType, Blog as BlogType } from "../../types";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { MobileBlog } from "../../components/MobileBlog";
import useMedia from "use-media";
import { SidebarWrapLayout } from "components/SidebarWrapLayout";

interface Props {
  blogs: BlogType[];
  tag: TagType;
  blogTotalCount: number;
  sortedAndLimitedTag: TagType[];
  latestDataBlog: BlogType[];
}

const PER_PAGE = 8;

export const TagId: NextPage<Props> = (props: Props) => {
  const { blogs, blogTotalCount, tag, sortedAndLimitedTag, latestDataBlog } =
    props;
  const isWide = useMedia({ minWidth: "700px" });

  const memorizedBlogList = useMemo(
    () => (
      <>
        <Blog blog={blogs} />
        <Pagination
          currentPageNumber={1}
          maxPageNumber={Math.ceil(blogTotalCount / PER_PAGE)}
          whatPage={"tags"}
          tagId={tag.id}
        />
      </>
    ),
    [blogs, blogTotalCount, tag]
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
          currentPageNumber={1}
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
  const data = await getAllTag();

  const paths = data.contents.map((content) => `/tags/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async (
  context
): Promise<{
  props: Props;
}> => {
  const tagId = context.params.tag;
  const offset = 0;
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
      blogTotalCount: data.totalCount,
      tag: tag,
      sortedAndLimitedTag: sortedAndLimitedTag,
      latestDataBlog: latestDataBlog.contents,
    },
  };
};

export default TagId;
