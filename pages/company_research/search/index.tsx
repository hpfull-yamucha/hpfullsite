import React, { useEffect, useState, useCallback } from "react";
import useSWR from "swr";
import { Layout } from "../../../components/Layout";
import { CompanyResearch } from "../../../components/CompanyResearch";
import { useRouter } from "next/router";
import { NextPage } from "next";
import Seo from "components/SeoOgp";

const CompanySearchPage: NextPage = () => {
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
    `/api/searchCompnay?keyword=${encodeURI(blogsQuery)}`,
    fetcher
  );

  const backPage = useCallback(() => {
    router.push({
      pathname: "/company_research", //URL
    });
  }, [router]);

  return (
    <Layout>
      <>
        <Seo noindex={true} />
        <div className="flex flex-col">
          <button onClick={backPage}>戻る</button>
          <p className="text-3xl m-8 text-black">
            「{blogsQuery ? blogsQuery : ""}」 の検索結果
          </p>
        </div>
        {data ? (
          <CompanyResearch companies={data.blogs.contents} />
        ) : (
          <CompanyResearch companies={[]} />
        )}
      </>
    </Layout>
  );
};

export default CompanySearchPage;
