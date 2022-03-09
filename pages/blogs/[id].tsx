import React, { useMemo } from "react";
import { Layout } from "../../components/Layout";
import Seo from "../../components/SeoOgp";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Blog as BlogType } from "../../types";
import { BlogId as BlogIdComponent } from "../../components/BlogId";
import { MobileBlogId } from "components/MobileBlogId";
import useMedia from "use-media";
import { Tag as TagType } from "../../types";
import {
  getAllBlog,
  getLatestBlog,
  getSpecificBlog,
  getSortedAndLimitedTag,
  getPopularBlog,
} from "libs/client";
import { SidebarWrapLayout } from "components/SidebarWrapLayout";
import { LatestBlogListWithImage } from "components/LatestBlogListWithImage";

interface Props {
  blog: BlogType;
  preview: boolean;
  latestBlog?: BlogType[];
  sortedAndLimitedTag: TagType[];
  popularBlog?: BlogType[];
}

const BlogId: NextPage<Props> = (props: Props) => {
  const { blog, preview, popularBlog, sortedAndLimitedTag } = props;
  const isWide = useMedia({ minWidth: "700px" });
  const tagsComponent = useMemo(() => {
    return (
      blog.tags &&
      blog.tags.map((tag) => {
        return (
          <div key={tag.id} className="pt-2 md:mr-1">
            <Link href={`/tags/${tag.id}`}>
              <a className="text-blue-500 hover:bg-gray-400 p-1 md:p-2 rounded">
                #{tag.name}
              </a>
            </Link>
          </div>
        );
      })
    );
  }, [blog]);

  return (
    <Layout>
      <>
        {preview && (
          <p className={"bg-yellow-100 text-yellow-900 p-4 text-center mt-8"}>
            プレビュー表示がONになっています。
            <Link href={`/api/exitPreview?id=${blog.id}`}>
              <a className="underline">プレビュー表示をOFFにする</a>
            </Link>
          </p>
        )}
        <Seo
          pageTitle={blog.title}
          pageDescription={blog.body}
          pageImg={blog.image.url}
          pageImgWidth={1280}
          pageImgHeight={960}
        />
        {isWide ? (
          <SidebarWrapLayout
            popularBlog={popularBlog}
            sortedAndLimitedTag={sortedAndLimitedTag}
            writer={blog.writer}
          >
            <BlogIdComponent blog={blog} tagsComponent={tagsComponent} />
          </SidebarWrapLayout>
        ) : (
          <>
            <MobileBlogId blog={blog} tagsComponent={tagsComponent} />
          </>
        )}
      </>
    </Layout>
  );
};

// 任意のHTML文を置換する関数です
export const replaceBody = ({ body, shortCodes }) => {
  const shortCodesMap =
    shortCodes?.reduce(
      (res, { code, body }) => ({ ...res, [code]: body }),
      {}
    ) ?? {};
  return body.replace(
    /&lt;&lt;(.+?)&gt;&gt;/g,
    (...[, key]) => shortCodesMap[key]
  );
};

const isDraft = (item: any): item is { draftKey: string } =>
  !!(item?.draftKey && typeof item.draftKey === "string");

// 静的生成のためのパスを指定します
export const getStaticPaths: GetStaticPaths = async () => {
  // https://document.microcms.io/content-api/get-list-contents
  // https://zenn.dev/rabbit/scraps/0478726d184b2b
  const data = await getAllBlog();

  const paths = data.contents.map((content) => `/blogs/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async (
  context
): Promise<{
  props: Props;
}> => {
  const id = context.params?.id;
  const draftKey = isDraft(context.previewData)
    ? { draftKey: context.previewData.draftKey }
    : {};
  const data =
    typeof id === "string" ? await getSpecificBlog({ id, draftKey }) : null;

  const popularBlog = await getPopularBlog();

  const preview = draftKey.draftKey ? true : false;

  const sortedAndLimitedTag = await getSortedAndLimitedTag();

  return {
    props: {
      blog: {
        ...data,
        body: replaceBody(data),
      },
      preview: preview,
      sortedAndLimitedTag: sortedAndLimitedTag,
      popularBlog: popularBlog,
    },
  };
};

export default BlogId;
