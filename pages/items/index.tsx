import { getItem } from "libs/client";
import { Layout } from "../../components/Layout";
import Seo from "../../components/SeoOgp";
import { Item } from "../../components/Item";
import { Pagination } from "../../components/Pagination";
import { GetStaticProps, NextPage } from "next";
import { Item as ItemType } from "../../types";

interface Props {
  items: ItemType[];
  totalCount: number;
}

const LIMIT_NUMBER = 9;

const Items: NextPage<Props> = (props: Props) => {
  const { items, totalCount } = props;
  return (
    <Layout>
      <>
        <Seo
          pageTitle={"ショップアイテム一覧"}
          pageDescription={
            "ハッピフル作成のオリジナルアイテムの購入はこちらから"
          }
          pageImg={"https://hpfull.jp/hpfulllogoshopdai.png"}
          pageImgWidth={1200}
          pageImgHeight={1200}
        />
        <Item items={items} />
        <Pagination
          currentPageNumber={1}
          maxPageNumber={Math.ceil(totalCount / LIMIT_NUMBER)}
          whatPage={"items"}
        />
      </>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Props;
}> => {
  const data = await getItem({ limit: LIMIT_NUMBER });
  return {
    props: {
      items: data.contents,
      totalCount: Number(data.totalCount),
    },
  };
};

export default Items;
