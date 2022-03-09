import React from "react";
import { getSpecificCompanyResearch, getAllCompanyResearch } from "libs/client";
import { Layout } from "../../components/Layout";
import Image from "next/image";
import { CompanyContentCard } from "../../components/CompanyContentCard";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { CompanyResearch as CompanyResearchType } from "../../types";
import Seo from "components/SeoOgp";

interface Props {
  company: CompanyResearchType;
}

export const CompanyResearchId: NextPage<Props> = (props) => {
  const { company } = props;
  const vokersRating =
    company.rating && company.rating >= 0 && company.rating <= 5
      ? company.rating
      : null;
  const processedVokersRating = vokersRating ? (100 * vokersRating) / 5 : null;
  return (
    <Layout>
      <>
        <Seo noindex={true} />
        <div className="flex mt-20 w-11/12 md:w-2/3 xl:w-1/2 px-3 md:px-8 pb-3 border-b-2 border-black justify-between">
          <div>
            <div className="self-center mr-2 md:mr-8">
              <p className="text-xl md:text-2xl text-black">
                {company.formal_name}
              </p>
            </div>
            <div className="mt-2 ml-2 flex items-center justify-center h-9">
              <div className="pb-1 h-full mr-2 text-base flex items-end justify-center">
                Vokers評価
              </div>
              <div className="h-full relative inline-block">
                <div className="text-3xl items-center">☆☆☆☆☆</div>
                <div
                  style={{ width: `${processedVokersRating}%` }}
                  className="text-3xl items-center text-yellow-300 absolute top-0 overflow-hidden whitespace-nowrap"
                >
                  ★★★★★
                </div>
              </div>
              <div className="pt-1 flex ml-2 h-full text-base items-center justify-center">
                {vokersRating}
              </div>
            </div>
          </div>
          <div className="self-center">
            <Image
              src={company.company_image.url}
              width={120}
              height={
                (120 * company.company_image.height) /
                company.company_image.width
              }
              alt="blogimg"
            ></Image>
          </div>
        </div>
        <div className="w-11/12 md:w-2/3 xl:w-1/2 mb-40 mx-4">
          <dl className="flex flex-col items-start mt-20">
            <CompanyContentCard
              contentName={"公式URL"}
              content={company.company_url}
            />
            <CompanyContentCard
              contentName={"事業サービス"}
              content={company.services}
            />
            <CompanyContentCard
              contentName={"ポイント"}
              content={company.point}
            />
            <CompanyContentCard contentName={"メモ"} content={company.memo} />
            <CompanyContentCard
              contentName={"口コミ"}
              content={company.review}
            />
            <CompanyContentCard contentName={"URL集"} content={company.urls} />
          </dl>
        </div>
      </>
    </Layout>
  );
};

export const processedData = (
  data: CompanyResearchType
): CompanyResearchType => {
  const unRegisteredContext = "未登録です。(microCMSより登録してください)";
  data.company_url = data.company_url ? data.company_url : unRegisteredContext;

  data.services = data.services ? data.services : unRegisteredContext;

  data.point = data.point ? data.point : unRegisteredContext;

  data.memo = data.memo ? data.memo : unRegisteredContext;

  data.urls = data.urls ? data.urls : unRegisteredContext;

  data.review = data.review ? data.review : unRegisteredContext;

  return data;
};

// 静的生成のためのパスを指定します
export const getStaticPaths: GetStaticPaths = async () => {
  // https://document.microcms.io/content-api/get-list-contents
  // https://zenn.dev/rabbit/scraps/0478726d184b2b
  const data = await getAllCompanyResearch();

  const paths = data.contents.map(
    (content: CompanyResearchType) => `/company_research/${content.id}`
  );
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async (
  context
): Promise<{
  props: Props;
}> => {
  const id = context.params?.id;

  const data =
    typeof id === "string" ? await getSpecificCompanyResearch(id) : null;

  return {
    props: {
      company: processedData(data),
    },
  };
};

export default CompanyResearchId;
