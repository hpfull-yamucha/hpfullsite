import { Layout } from "components/Layout";
import Seo from "components/SeoOgp";
import { client } from "libs/client";
import { GetStaticProps, NextPage } from "next";
import { Member as MemberType } from "types";
import Link from "next/link";
import { Balloon } from "components/Balloon";

interface Props {
  dataMember: MemberType[];
}

const Home: NextPage<Props> = (props: Props) => {
  const { dataMember } = props;
  // タイプライターの実装方法
  // https://www.geeksforgeeks.org/how-to-add-typewriter-effect-in-next-js/
  // https://www.npmjs.com/package/typewriter-effect
  return (
    <Layout>
      <>
        <Seo
          pagePath="hpfull倶楽部"
          pageDescription="絶対、幸せに満ちた世界を、創り出す"
        />

        <div className="mb-4 md:mb-10 mt-20">
          <p className="text-4xl text-black font-serif text-center font-bold">
            絶対、幸せに満ちた世界を、創り出す
          </p>

          <p className="text-xl mt-1 text-black font-fantasy text-right mr-3">
            Welcome to the world of the Happifull Club!! Absolutely Absolutely
            Absolutely.
          </p>
        </div>

        <div className="flex mt-4 mb-8">
          <div className="md:w-96 w-80 h-20">
            <Balloon
              balloonMessage={
                "公式インスタグラムができたゾ!\n フォローしてくれよな! \n "
              }
              balloonHeight={"h-11"}
            />
          </div>
          <div className="ml-2 pt-7">
            <a
              href={"https://www.instagram.com/hpfull_club/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-10 h-10 mr-3 text-pink-400"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="text-left md:w-96 w-80 mb-20 mt-10">
          <p className="font-serif font-bold text-lg">
            <span className="text-red-500">SNS</span>
            が発展した現代、人と実際に会ってコミュニケーションをする機会が減り、人と人とのつながりが浅くなってきました。
            <br />
            <span className="text-red-500">そんな</span>
            情報過多・情報社会の渦に飲み込まれた世界を再構築し、再創生するため、人と人の繋がりとそれが創り上げる世界の美しさと生じる幸せの限りを提供していきます。
            <br />
            <span className="text-red-500">私たち、</span>
            ハッピフル倶楽部は権利能力なき社団、つまりは任意団体として構成員一同、
            <br />
            <span className="text-red-500">絶対、</span>
            人々の原体験でもあるフットサルを通じて多くの人が幸せに満ちていきますよう努めます。
            <br />
            <span className="text-red-500">教祖、</span>
            は本当に、唯一の創造主であります。
          </p>
          <div className="mt-4">
            <Link href={"/blogs/dquirjn12z8"}>
              <a className="text-blue-500">
                →本サイトの構成と作り方を弊権力なき社団教団教祖自ら教えてあげます。
              </a>
            </Link>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Home;
