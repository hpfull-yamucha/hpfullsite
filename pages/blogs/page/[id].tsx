import { useMemo } from "react";
import {
  getAllBlog,
  getBlog,
  getPopularBlog,
  getSortedAndLimitedTag,
} from "../../../libs/client";
import { Layout } from "../../../components/Layout";
import { Blog } from "../../../components/Blog";
import { MobileBlog } from "../../../components/MobileBlog";
import { Pagination } from "../../../components/Pagination";
import { Blog as BlogType } from "../../../types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Seo from "../../../components/SeoOgp";
import useMedia from "use-media";
import { Tag as TagType } from "../../../types";
import { SidebarWrapLayout } from "components/SidebarWrapLayout";

interface Props {
  blog: BlogType[];
  totalCount: number;
  currentPageNumber: number;
  latestBlog?: BlogType[];
  sortedAndLimitedTag: TagType[];
  popularBlog: BlogType[];
}

const PER_PAGE = 8;

const BlogPageId: NextPage<Props> = (props: Props) => {
  const {
    blog,
    totalCount,
    currentPageNumber,
    popularBlog,
    sortedAndLimitedTag,
  } = props;
  const isWide = useMedia({ minWidth: "700px" });

  const memorizedBlogList = useMemo(
    () => (
      <>
        <Blog blog={blog} />
        <Pagination
          currentPageNumber={currentPageNumber}
          maxPageNumber={Math.ceil(totalCount / PER_PAGE)}
          whatPage={"blogs"}
        />
      </>
    ),
    [blog, totalCount, currentPageNumber]
  );

  const BlogWithSidebar = useMemo(() => {
    return isWide ? (
      <SidebarWrapLayout
        popularBlog={popularBlog}
        sortedAndLimitedTag={sortedAndLimitedTag}
      >
        {memorizedBlogList}
      </SidebarWrapLayout>
    ) : (
      <div className="flex flex-col justify-center items-center">
        <MobileBlog blog={blog} />
        <Pagination
          currentPageNumber={currentPageNumber}
          maxPageNumber={Math.ceil(totalCount / PER_PAGE)}
          whatPage={"blogs"}
        />
      </div>
    );
  }, [
    blog,
    isWide,
    popularBlog,
    sortedAndLimitedTag,
    totalCount,
    memorizedBlogList,
    currentPageNumber,
  ]);

  return (
    <Layout>
      <>
        <Seo
          pageTitle={"ブログ一覧"}
          pageDescription={
            "hpfull新進気鋭のメンバーが丹精込めて仕上げたブログ記事です"
          }
        />
        <div className="w-screen">
          <div className="mt-16 mb-10 mx-4">
            <p className="text-center text-4xl text-black font-semibold">
              ハッピフルBLOG
            </p>
            <p className="text-base text-center text-black ">
              ハッピフルメンバー員による渾身のブログ記事一覧です
            </p>
          </div>
          {BlogWithSidebar}
        </div>
      </>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const data = await getAllBlog();

  const { totalCount } = data;
  const paths = range(1, Math.ceil(totalCount / PER_PAGE)).map(
    (i) => `/blogs/page/${i}`
  );
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (
  context
): Promise<{
  props: Props;
}> => {
  const numId = Number(context.params?.id);
  const offset = (numId - 1) * PER_PAGE;
  const data = await getBlog({ offset: offset, limit: PER_PAGE });

  const popularBlog = await getPopularBlog();

  const sortedAndLimitedTag = await getSortedAndLimitedTag();

  return {
    props: {
      blog: data.contents,
      totalCount: Number(data.totalCount),
      currentPageNumber: numId,
      popularBlog: popularBlog,
      sortedAndLimitedTag: sortedAndLimitedTag,
    },
  };
};

export default BlogPageId;
