import React, { useMemo } from "react";
import { Layout } from "../../components/Layout";
import { Blog } from "../../components/Blog";
import { MobileBlog } from "../../components/MobileBlog";
import { Pagination } from "../../components/Pagination";
import { Blog as BlogType, Tag as TagType } from "types";
import { GetStaticProps, NextPage } from "next";
import Seo from "../../components/SeoOgp";
import useMedia from "use-media";
import { getBlog, getPopularBlog, getSortedAndLimitedTag } from "libs/client";
import { Balloon } from "components/Balloon";
import { SidebarWrapLayout } from "components/SidebarWrapLayout";

interface Props {
  blog: BlogType[];
  latestBlog?: BlogType[];
  totalCount: number;
  sortedAndLimitedTag: TagType[];
  popularBlog?: BlogType[];
}

const PER_PAGE = 8;

const BlogPage: NextPage<Props> = (props: Props) => {
  const { blog, totalCount, popularBlog, sortedAndLimitedTag } = props;
  const isWide = useMedia({ minWidth: "700px" });

  const memorizedBlogList = useMemo(
    () => (
      <>
        <Blog blog={blog} />
        <Pagination
          currentPageNumber={1}
          maxPageNumber={Math.ceil(totalCount / PER_PAGE)}
          whatPage={"blogs"}
        />
      </>
    ),
    [blog, totalCount]
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
          currentPageNumber={1}
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
          <div className="mt-16 mb-10 mx-4 h-40 md:h-36">
            <p className="text-center text-4xl text-black font-semibold">
              ハッピフルBLOG
            </p>
            <div className="w-[340px] md:w-[600px] mx-auto mt-4">
              <Balloon
                balloonMessage={
                  "権力なき社団ハッピフル倶楽部構成員による教祖に捧げる渾身のブログだゾ!\n 最近野望を語った記事を書いたから見てくれよな!"
                }
              />
            </div>
          </div>

          {BlogWithSidebar}
        </div>
      </>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Props;
}> => {
  const dataBlog = await getBlog({ limit: PER_PAGE });
  const popularBlog = await getPopularBlog();

  const sortedAndLimitedTag = await getSortedAndLimitedTag();
  return {
    props: {
      blog: dataBlog.contents,
      totalCount: dataBlog.totalCount,
      popularBlog: popularBlog,
      sortedAndLimitedTag: sortedAndLimitedTag,
    },
  };
};

export default BlogPage;
