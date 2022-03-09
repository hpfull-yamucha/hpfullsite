import { Layout } from "components/Layout";
import { FB } from "components/FB";
import { client } from "libs/client";
import Seo from "components/SeoOgp";
import { GetStaticProps, NextPage } from "next";
import { Feedback } from "types";

interface Props {
  feedback: Feedback[];
}

const CustomersFb: NextPage<Props> = (props: Props) => {
  const { feedback } = props;
  return (
    <Layout>
      <>
        <Seo pageTitle={"クライアントの声"} />
        <div className="my-6">
          <p className="text-1xl text-black">
            参加者の方からいただく声を集めました
          </p>
        </div>

        {feedback.map((feedback: Feedback, index: number) => {
          index += 1;
          let id = ("00" + index).slice(-2);
          return (
            <FB
              key={feedback.id}
              id={id}
              title={feedback.title}
              avatar={feedback.image.url}
              content={feedback.body}
            />
          );
        })}
      </>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Props;
}> => {
  const data = await client.get({ endpoint: "feedback" });
  return {
    props: {
      feedback: data.contents,
    },
  };
};

export default CustomersFb;
