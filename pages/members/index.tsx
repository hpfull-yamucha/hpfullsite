import { Layout } from "../../components/Layout";
import Seo from "../../components/SeoOgp";
import { Member } from "../../components/Member";
import { getAllMember } from "libs/client";
import { GetStaticProps, NextPage } from "next";
import { Member as MemberType } from "../../types";

interface Props {
  member: MemberType[];
}

const Contact: NextPage<Props> = (props) => {
  const { member } = props;
  return (
    <Layout>
      <>
        <Seo
          pageTitle={"Member一覧"}
          pageDescription={"hpfull新進気鋭のメンバーをご賞味ください"}
          pageImgWidth={1280}
          pageImgHeight={960}
          noindex={true}
        />
        <Member member={member} />
      </>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Props;
}> => {
  const data = await getAllMember();
  return {
    props: {
      member: data.contents,
    },
  };
};

export default Contact;
