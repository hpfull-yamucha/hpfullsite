import { getAllMember, getSpecificMember } from "libs/client";
import { Layout } from "../../components/Layout";
import Seo from "../../components/SeoOgp";
import Image from "next/image";
import { Member as MemberType } from "../../types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface Props {
  member: MemberType;
}

const MemberId: NextPage<Props> = (props) => {
  const { member } = props;
  return (
    <Layout>
      <>
        <Seo
          pageTitle={member.name}
          pageDescription={member.comment}
          pageImg={member.image.url}
          pageImgWidth={1000}
          pageImgHeight={1000}
          noindex={true}
        />
        <div className="mx-8 my-6 flex flex-1 justify-center items-center flex-col w-screen max-w-2xl">
          <div className="border-b-2 border-gray-700 m-8">
            <p className="text-3xl text-black">{member.name}</p>
          </div>
          <p>{member.position}</p>
          <div className="mt-6 mx-4">
            {member.memberpageImage ? (
              <Image
                className="rounded-3xl"
                src={member.memberpageImage.url}
                width={400}
                height={300}
                alt="nullmemberimg"
              ></Image>
            ) : (
              <Image
                className="rounded-3xl"
                src={member.image.url}
                width={400}
                height={300}
                alt="memberimg"
              ></Image>
            )}
          </div>
          <div className="max-w-full w-96">
            {member.award ? (
              <div className="mb-4 mx-2">
                <p className="text-xl text-black mb-2">経歴</p>
                {member.award}
              </div>
            ) : (
              <></>
            )}

            {member.publications ? (
              <div className="mb-4 mx-2">
                <p className="text-xl text-black mb-2">著書</p>
                {member.publications}
              </div>
            ) : (
              <></>
            )}

            {member.comment ? (
              <div className="mb-4 mx-2">
                <p className="text-xl text-black mb-2">ひとこと</p>
                {member.comment}
              </div>
            ) : (
              <></>
            )}
            {member.affiliate ? (
              <div className="mb-4 mx-2">
                <p className="text-xl text-black mb-2">アフィリエイトリンク</p>
                <div
                  className="prose"
                  dangerouslySetInnerHTML={{
                    __html: `${member.affiliate}`,
                  }}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </>
    </Layout>
  );
};

// 静的生成のためのパスを指定します
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAllMember();

  const paths = data.contents.map(
    (content: MemberType) => `/members/${content.id}`
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
  const data = typeof id === "string" ? await getSpecificMember(id) : null;

  return {
    props: {
      member: data,
    },
  };
};

export default MemberId;
