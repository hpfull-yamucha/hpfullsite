import React, { useEffect, useState, useCallback } from "react";
import useSWR from "swr";
import { Layout } from "../../../components/Layout";
import { Blog } from "../../../components/Blog";
import { useRouter } from "next/router";

interface Props {
  totalCount: number;
}

const BlogsSearchPage: React.FC<Props> = (props: Props) => {
  const { totalCount } = props;
  const router = useRouter();
  const [blogsQuery, setBlogsQuery] = useState<string | null>(null);

  useEffect(() => {
    const { keyword } = router.query;
    setBlogsQuery(keyword && typeof keyword === "string" ? keyword : null);
  }, [router.query]);

  async function fetcher(url: string) {
    const response = await fetch(url);
    return response.json();
  }

  const { data, error } = useSWR(
    `/api/searchBlogs?keyword=${encodeURI(blogsQuery)}`,
    fetcher
  );

  return (
    <Layout>
      <>
        <p className="text-3xl m-8 text-black">
          「{blogsQuery ? blogsQuery : ""}」 の検索結果
        </p>
        {data ? <Blog blog={data.blogs.contents} /> : <Blog blog={[]} />}
      </>
    </Layout>
  );
};

export default BlogsSearchPage;
