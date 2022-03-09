import { getCompanyResearch, getAllCompanyResearch } from "libs/client";
import { Layout } from "../../../components/Layout";
import { CompanyResearch } from "../../../components/CompanyResearch";
import { Pagination } from "../../../components/Pagination";
import { CompanySearchInput } from "../../../components/CompanySearchInput";
import { CompanyResearch as CompanyResearchType } from "../../../types";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Seo from "components/SeoOgp";

interface Props {
  companies: CompanyResearchType[];
  totalCount: number;
  currentPageNumber: number;
}

const PER_PAGE = 6;

export const CompanyResearchPageId: NextPage<Props> = (props: Props) => {
  const { companies, totalCount, currentPageNumber } = props;
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
          currentPageNumber={currentPageNumber}
          maxPageNumber={Math.ceil(totalCount / PER_PAGE)}
          whatPage={"company_research"}
        />
      </>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const data = await getAllCompanyResearch();

  const { totalCount } = data;
  const paths = range(1, Math.ceil(totalCount / PER_PAGE)).map(
    (i) => `/company_research/page/${i}`
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
  const data = await getCompanyResearch({ offset: offset, limit: PER_PAGE });

  return {
    props: {
      companies: data.contents,
      totalCount: Number(data.totalCount),
      currentPageNumber: numId,
    },
  };
};

export default CompanyResearchPageId;
