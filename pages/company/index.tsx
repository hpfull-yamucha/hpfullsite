import { useMemo } from "react";
import { Layout } from "../../components/Layout";
import { getMycompany } from "libs/client";
import { GetStaticProps, NextPage } from "next";
import { Company } from "../../types";
import Seo from "../../components/SeoOgp";
import { MyCompanyHeader } from "../../components/MyCompanyHeader";
import { MyCompanyData } from "../../components/MyCompanyData";

interface Props {
  company: Company;
}

const Campnay: NextPage<Props> = (props: Props) => {
  const { company } = props;
  const directors = useMemo(() => {
    return company.directors.map((director) => {
      return <p key={director.id}>{director.directors}</p>;
    });
  }, [company]);
  return (
    <Layout>
      <>
        <Seo
          pageTitle={"組織情報"}
          pageDescription={
            "新進気鋭のユニコーン権力なき社団任意団体であるハッピフル倶楽部の組織情報です"
          }
          noindex={true}
        />
        <div className="mt-20 mb-10">
          <p className="text-5xl text-black">ORGANIZATION</p>
        </div>
        <MyCompanyHeader tabName="company_outline" />
        <div className="md:w-2/3 mb-40 mx-4">
          <dl className="items-center py-10 flex border-b border-gray-400">
            <dt className="pr-2 md:text-xl text-xs w-14 md:w-48 text-black">
              組織名
            </dt>
            <dd>
              <div className="text-xl md:text-4xl ml-8 md:m-0 text-black">
                {company.name}
              </div>
            </dd>
          </dl>
          <MyCompanyData
            NameOfComapnyInformation={"住所"}
            companyInformation={company.address}
          />
          <MyCompanyData
            NameOfComapnyInformation={"資本金"}
            companyInformation={company.capital}
          />

          <MyCompanyData
            NameOfComapnyInformation={"決算日"}
            companyInformation={company.accountingDate}
          />
          <MyCompanyData
            NameOfComapnyInformation={"従業員数"}
            companyInformation={company.numberOfEmployees}
          />
          <MyCompanyData
            NameOfComapnyInformation={"役員"}
            directors={directors}
          />
        </div>
      </>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Props;
}> => {
  const data = await getMycompany();
  return {
    props: {
      company: data.contents[0],
    },
  };
};

export default Campnay;
