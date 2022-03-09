import { Layout } from "../../components/Layout";
import { NextPage } from "next";
import Link from "next/link";
import { CompanyJobTable } from "../../components/CompanyJobTable";
import Seo from "components/SeoOgp";

const Job: NextPage = () => {
  return (
    <Layout>
      <>
        <Seo noindex={true} />
        <div className="md:w-2/3 xl:w-1/2">
          <div className="mt-20 mb-8">
            <p className="text-5xl text-black mb-4 text-center font-serif">
              採用情報
            </p>
          </div>
          <div className="mb-40 mx-4">
            <p className="text-left text-xl text-black font-serif">
              弊権利能力なき社団体構成員のお茶汲みを中心に、ディレクター、開発、マネージャー、被激詰め、CS、採用人事、マーケティング、お茶汲み、セールス全てを経験することができます。
            </p>
            <dl className="py-10 flex flex-col items-start">
              <CompanyJobTable definitionTeam="具体的な業務内容">
                <>
                  ・いずれかのプロダクト、もしくはプロダクト横断の課題を解決するための施策提案兼開発
                  <br />
                  ・サービス運用を視野に入れた言語選定
                  <br />
                  ・社内スタッフとの協力的ディレクション
                  <br />
                  ・オンライン・オフラインイベントの企画・運営
                  <br />
                  ・新規サービスの戦略立案、マーケティング、効果測定、分析、ディレクション
                  <br />
                  ・お茶汲み
                </>
              </CompanyJobTable>

              <CompanyJobTable definitionTeam="必須スキル/経験">
                <>
                  ・フロントエンド開発実務経験3年以上
                  <br />
                  ・React,Angular,Vuejsのいずれかを用いたWebサービスの開発実務経験
                  1年以上
                  <br />
                  ・事業会社におけるtoCサービスのグロース経験 3年以上
                  <br />
                  ・対外折衝関連業務の経験 2年以上
                  <br />
                  ・エンタメ系のイベント企画・進行管理・PRに関するご経験 2年以上
                  <br />
                  ・基本的なお茶汲み業務 1年以上
                </>
              </CompanyJobTable>

              <CompanyJobTable definitionTeam="歓迎スキル/経験">
                <>
                  ・イベントのプロデューサー／ディレクター／PRの業務経験
                  <br />
                  ・顧客体験を設計する力
                  <br />
                  ・ロジカルに物事を進められる
                  <br />
                  ・サービス開発やビジネス化にも興味がある方
                  <br />
                  ・React,Angular,Vuejsなどのモダンな技術にチャレンジしたい方
                  <br />
                  ・実家が太い
                </>
              </CompanyJobTable>

              <CompanyJobTable definitionTeam="勤務地">
                <>
                  ・東京都新宿区落合2-18-19グランメンタワー48階(最寄駅:東京メトロ・都営大江戸線/六本木)
                </>
              </CompanyJobTable>

              <CompanyJobTable definitionTeam="勤務時間">
                <>
                  6:00 ~ 23:00
                  <br />
                  ・実働17時間 (休憩は特にございません)
                  <br />
                  ・上記時間外労働は平均150時間/月
                </>
              </CompanyJobTable>

              <CompanyJobTable definitionTeam="試用期間/試用期間中の条件">
                <>
                  ・試用期間:18ヶ月
                  <br />
                  ・給与なし
                </>
              </CompanyJobTable>

              <CompanyJobTable definitionTeam="給与">
                <>
                  月給 20億円程度(弊社社員Aのモデル)
                  <br />
                  <br />
                  ・基本給は0円
                  <br />
                  ・本人が生み出した売上の2%をインセンティブとして支給
                  <br />
                  (例: 1000億円のプロジェクトを完遂させた場合、給与は20億円)
                </>
              </CompanyJobTable>

              <CompanyJobTable definitionTeam="休日休暇">
                <>
                  {`<年間休日約1日>`}
                  <br />
                  <br />
                  ・完全年始休1日制
                  <br />
                  ・介護休業(ただし介護休業を取得する場合は罰金として1日8万円を頂戴いたします。)
                  <br />
                  ・育児休業（男女ともに取得実績あり。ただし育休を取得する場合は罰金として1日8万円を頂戴いたします。）
                  <br />
                  ・子の看護休暇(入社後特別な理由がない限りお子さんは産まないでください)
                </>
              </CompanyJobTable>

              <CompanyJobTable definitionTeam="福利厚生など">
                <>
                  ・オフィス内にこたつがあります。
                  <br />
                  <span className="ml-4 text-base">
                    L新入社員は観賞用としてご使用ください。
                  </span>
                  <br />
                  ・オフィス全室喫煙可
                  <br />
                  <span className="ml-4 text-base">
                    Lオフィスはかなりモクモクしています。ただし寝タバコと葉巻は非常に危険なためお控えください
                  </span>
                  <br />
                  ・ONEデスク制度
                  <br />
                  <span className="ml-4 text-base">
                    L入社を決めてくれた社員に向けて上限8万円までデスク周りの作業効率を改善するための「何か」を購入できる制度
                  </span>
                  <br />
                  ・Think!福利厚生制度
                  <br />
                  <span className="ml-4 text-base">
                    L社員自ら福利厚生を考え制限なしで実行できる制度
                  </span>
                  <br />
                  ・コーヒーナップ制度
                  <br />
                  <span className="ml-4 text-base">
                    L上長へ土下座をすることで15分の仮眠が認められる制度
                  </span>
                  <div className="flex justify-end mt-4">
                    <Link href={"/blogs/4v0axf5r-o8a"}>
                      <a className="text-blue-600 hover:text-blue-900 p-2 rounded">
                        <p className="text-lg font-serif">
                          →弊社の福利厚生についての詳細はこちらのブログ記事をご覧ください!!
                        </p>
                      </a>
                    </Link>
                  </div>
                </>
              </CompanyJobTable>
            </dl>
            <div className="text-center text-lg">
              <span>興味のある方は</span>
              <a
                className="text-blue-600"
                href="mailto:ctodayo&#64;hpfull.jp?subject=おまいさんへ告ぐ。?body=おまいさんのもとで働くために、土下座とお茶汲みをも厭わないことを誓います。"
                target={"_blank"}
                rel="noreferrer"
              >
                ctodayo@hpfull.jp
              </a>
              <span>まで!!</span>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Job;
