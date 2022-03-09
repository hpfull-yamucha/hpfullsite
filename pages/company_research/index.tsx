import { Layout } from "../../components/Layout";
import { getCompanyResearch } from "libs/client";
import { Pagination } from "../../components/Pagination";
import { CompanyResearch } from "../../components/CompanyResearch";
import { CompanySearchInput } from "../../components/CompanySearchInput";
import { GetStaticProps, NextPage } from "next";
import { CompanyResearch as CompanyResearchType } from "../../types";
import Seo from "components/SeoOgp";
import { normalize } from "path/posix";

interface Props {
  companies: CompanyResearchType[];
  totalCount: number;
}

const PER_PAGE = 6;

export const CompnayResearch: NextPage<Props> = (props: Props) => {
  const { companies, totalCount } = props;
  return (
    <Layout>
      <>
        <Seo noindex={true} />
        <div className="mt-20 mb-10">
          <p className="text-3xl text-black mb-4">僕たちのチキチキ企業研究!</p>
        </div>
        <CompanySearchInput />
        <CompanyResearch companies={companies} />
        <Pagination
          currentPageNumber={1}
          maxPageNumber={Math.ceil(totalCount / PER_PAGE)}
          whatPage={"company_research"}
        />
      </>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Props;
}> => {
  const data = await getCompanyResearch({ limit: PER_PAGE });
  return {
    props: {
      companies: data.contents,
      totalCount: data.totalCount,
    },
  };
};

export default CompnayResearch;
