import { Layout } from "components/Layout";
import Seo from "components/SeoOgp";
import { NextPage } from "next";
import { CompanyJobTable } from "components/CompanyJobTable";

const PrivacyPolicy: NextPage = () => {
  return (
    <Layout>
      <>
        <Seo pageTitle={"プライバシーポリシー"} />
        <div className="w-screen md:w-2/3 xl:w-1/2">
          <div className="mt-20 mx-4">
            <p className="text-left text-4xl text-black">個人情報保護方針</p>
          </div>

          <div className="mb-40 mx-4">
            <dl className="py-10 flex flex-col items-start">
              <CompanyJobTable definitionTeam="個人情報の利用目的">
                <>
                  弊サイトでは、お問い合わせや記事へのコメントの際、名前やメールアドレス等の個人情報を入力いただく場合がございます。
                  <br />
                  取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどをでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
                </>
              </CompanyJobTable>

              <CompanyJobTable definitionTeam="広告について">
                <>
                  弊サイトは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。
                </>
              </CompanyJobTable>

              <CompanyJobTable definitionTeam="アクセス解析ツールについて">
                <>
                  当ブログでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。トラフィックデータは匿名で収集されており、個人を特定するものではありません。
                </>
              </CompanyJobTable>

              <CompanyJobTable definitionTeam="個人情報の利用目的">
                <>
                  弊サイトにてお預かりした個人情報は、以下の目的で利用するものとし、ご本人の同意なく目的外で使用しません。
                  <br />
                  <br />
                  ・ご本人へのご連絡するため <br />
                  ・お問い合わせに対応するため
                  <br />
                  ・利用規約に違反する態様でのご利用を防止するため
                </>
              </CompanyJobTable>

              <CompanyJobTable definitionTeam="個人情報の第三者への開示・提供の禁止">
                <>
                  弊サイトでは、お預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、第三者に開示することはありません。
                  <br />
                  <br />
                  ・ 本人の同意がある場合 <br />
                  ・法令に基づき、開示が必要となる場合
                  <br />
                  ・個人情報の保護に関する法律、その他の法令で認められている場合
                </>
              </CompanyJobTable>

              <CompanyJobTable definitionTeam="ご本人の照会">
                <>
                  ご本人の個人情報の照会・修正・削除などをご希望の場合は、ご本人であることを確認させていただいた後、対応いたします。
                </>
              </CompanyJobTable>

              <CompanyJobTable definitionTeam="法令、規範の遵守と見直し">
                <>
                  弊サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。
                  修正された最新のプライバシーポリシーは常に本ページにて開示されます。
                </>
              </CompanyJobTable>
            </dl>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default PrivacyPolicy;
