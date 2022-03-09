import { useMemo } from "react";
import { Layout } from "../../../components/Layout";
import { getMycompanyHistory } from "libs/client";
import { GetStaticProps, NextPage } from "next";
import { CompanyHistory } from "../../../types";
import Seo from "../../../components/SeoOgp";
import { MyCompanyHeader } from "../../../components/MyCompanyHeader";
import { MyCompanyHistoryTable } from "../../../components/MyCompanyHistoryTable";

interface Props {
  companyHistory: CompanyHistory[];
}

const Campnay: NextPage<Props> = (props: Props) => {
  const { companyHistory } = props;
  // https://qiita.com/netebakari/items/7c1db0b0cea14a3d4419
  const companyHistoryYear = companyHistory.map((companyHistory) => {
    return companyHistory.year;
  });
  const setCompanyHistoryYear = Array.from(new Set(companyHistoryYear)).sort();

  return (
    <Layout>
      <>
        <Seo
          pageTitle={"沿革"}
          pageDescription={
            "新進気鋭のユニコーン権力なき社団任意団体であるハッピフル倶楽部の組織の歴史です"
          }
          noindex={true}
        />
        <div className="mt-20 mb-10">
          <p className="text-5xl text-black">ORGANIZATION</p>
        </div>
        <MyCompanyHeader tabName="company_history" />
        <div className="md:w-2/3 mb-40 mx-4">
          {setCompanyHistoryYear.map((companyHistoryYear, index) => {
            return (
              <MyCompanyHistoryTable
                key={index}
                year={`${companyHistoryYear}年`}
                companyHistory={companyHistory.filter((companyHistory) => {
                  return companyHistory.year === companyHistoryYear;
                })}
              />
            );
          })}
        </div>
      </>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Props;
}> => {
  const data = await getMycompanyHistory();
  return {
    props: {
      companyHistory: data.contents,
    },
  };
};

export default Campnay;
