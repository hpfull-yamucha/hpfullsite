import { Layout } from "components/Layout";
import Seo from "components/SeoOgp";
import { NextPage } from "next";
import { CompanyJobTable } from "components/CompanyJobTable";

const Terms: NextPage = () => {
  return (
    <Layout>
      <>
        <Seo pageTitle={"利用規約"} />
        <div className="w-screen md:w-2/3 xl:w-1/2">
          <div className="mt-20 mx-4">
            <p className="text-left text-4xl text-black">利用規約</p>
          </div>

          <div className="mb-40 mx-4">
            <dl className="py-10 flex flex-col items-start">
              <CompanyJobTable definitionTeam="掲載コンテンツに関して">
                <>
                  弊サイト上に掲載される一切の画像、映像、音楽及び文章など（総称して「コンテンツ」）の著作権・肖像権等は各権利所有者に帰属致します。権利を侵害する目的はございません。コンテンツに問題がございましたら、各権利所有者様本人が直接メールでご連絡下さい。速やかに確認後、対応させて頂きます。
                </>
              </CompanyJobTable>

              <CompanyJobTable definitionTeam="アカウントの管理">
                <>
                  利用者は、メールアドレスやID・パスワード等の、弊サイトの利用に際して登録した情報（以下、「登録情報」）について、自己の責任の下、任意に登録、管理するものとします。利用者は、これを第三者に利用させ、または貸与、譲渡、名義変更、売買などをしてはならないものとします。
                  弊サイトは、登録情報によって本サービスの利用があった場合、利用登録をおこなった本人が利用したものと扱うことができ、当該利用によって生じた結果ならびにそれに伴う一切の責任については、利用登録を行った本人に帰属するものとします。
                </>
              </CompanyJobTable>

              <CompanyJobTable definitionTeam="禁止行為">
                <>
                  弊サイトの利用者に対し、下記の行為を禁止します。弊サイトの管理者（以下、「管理者」）が、利用者が禁止事項に違反したと判断した場合、管理者は利用者に対して、利用停止や投稿削除等の管理者が必要と判断した措置を取ることができるものとし、利用者はこれを異議なく同意するものとします。
                  <br />
                  <br />
                  ・弊サイトまたは第三者の知的財産権を侵害する行為 <br />
                  ・弊サイトまたは第三者の名誉・信用を毀損または不当に差別もしくは誹謗中傷する行為
                  <br />
                  ・その他、管理者が不適切と判断する行為
                </>
              </CompanyJobTable>

              <CompanyJobTable definitionTeam="免責事項">
                <>
                  弊サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
                  弊サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。
                  弊サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
                </>
              </CompanyJobTable>

              <CompanyJobTable definitionTeam="規約の改定">
                <>
                  管理者は利用者の承諾を得ることなく、本規約の内容を改定することができるものとし、利用者はこれを異議なく承諾するものとします。
                  本規約変更の有無については、利用者ご自身で本ページをご確認いただきますようお願いいたします。
                </>
              </CompanyJobTable>

              <CompanyJobTable definitionTeam="準拠法・管轄裁判所">
                <>
                  本規約に関する準拠法は日本法とします。
                  管理者と利用者との間で紛争が生じた場合、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
                </>
              </CompanyJobTable>
            </dl>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Terms;
