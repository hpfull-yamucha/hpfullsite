import { Layout } from "components/Layout";
import Seo from "components/SeoOgp";
import { NextPage, GetStaticProps } from "next";
import { CompanyJobTable } from "components/CompanyJobTable";
import { SnsIcons } from "components/SnsIcons";
import { client } from "libs/client";
import { Member as MemberType } from "types";

interface Props {
  member: MemberType;
}

const PrivacyPolicy: NextPage<Props> = (props: Props) => {
  const { member } = props;
  return (
    <Layout>
      <>
        <Seo pageTitle={"プライバシーポリシー"} />
        <div className="w-screen md:w-2/3 xl:w-1/2 px-4">
          <div className="mt-20 mx-4">
            <p className="text-left text-4xl text-black">お問合せ</p>
          </div>

          <div className="mb-40 mx-4">
            <dl className="py-10 flex flex-col items-start">
              <CompanyJobTable definitionTeam="お問合せ">
                <>
                  お問い合わせについては、以下SNSのダイレクトメッセージにお願いいたします。
                </>
              </CompanyJobTable>
            </dl>
            <SnsIcons member={member} />
          </div>
        </div>
      </>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Props;
}> => {
  const data = await client.get({
    endpoint: "member",
    contentId: "m73jw7s_c5",
  });
  return {
    props: {
      member: data,
    },
  };
};

export default PrivacyPolicy;
