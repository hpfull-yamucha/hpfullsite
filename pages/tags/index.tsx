import React, { useMemo } from "react";
import { Layout } from "../../components/Layout";
import Seo from "../../components/SeoOgp";
import { getBlog, getAllTag } from "libs/client";
import Link from "next/link";
import { Tag as TagType } from "../../types";
import { GetStaticProps, NextPage } from "next";

interface Props {
  tags: TagType[];
}

export const Tags: NextPage<Props> = (props: Props) => {
  const { tags } = props;
  // https://keizokuma.com/js-array-object-sort/#i
  const sortedTag = useMemo(() => {
    return tags.sort((a, b) => {
      return a.name < b.name ? -1 : 1;
    });
  }, [tags]);
  return (
    <Layout>
      <>
        <Seo pageTitle="tags" pageImgWidth={1280} pageImgHeight={960} />
        <div className="mx-8 my-6 flex flex-1 items-center flex-col w-screen max-w-2xl">
          <p className="text-3xl mt-10 mb-6">タグ一覧</p>
          <div className="flex flex-wrap px-4 justify-center items-center">
            {sortedTag.map((tag) => {
              return (
                <div className="m-3" key={tag.id}>
                  <Link href={`/tags/${tag.id}`}>
                    <a className="text-xl text-blue-500 hover:bg-gray-500 rounded">
                      #{tag.name}
                      {`(${tag.count})`}
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </>
    </Layout>
  );
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Props;
}> => {
  const data = await getAllTag();

  const tags = await Promise.all(
    data.contents.map(async (tag) => {
      const filters = `tags[contains]${tag.id}`;
      const blog = await getBlog({ filters: filters });
      return { ...tag, count: blog.totalCount };
    })
  );

  return {
    props: {
      tags: tags,
    },
  };
};

export default Tags;
