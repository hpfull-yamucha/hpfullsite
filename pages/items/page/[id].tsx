import { getItem, getAllItem } from "libs/client";
import { Layout } from "../../../components/Layout";
import { Item } from "../../../components/Item";
import { Pagination } from "../../../components/Pagination";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { Item as ItemType } from "../../../types";

interface Props {
  items: ItemType[];
  totalCount: number;
  currentPageNumber: number;
}

const PER_PAGE = 9;

export const ItemPageId: NextPage<Props> = (props: Props) => {
  const { items, totalCount, currentPageNumber } = props;
  return (
    <Layout>
      <>
        <Item items={items} />
        <Pagination
          currentPageNumber={currentPageNumber}
          maxPageNumber={Math.ceil(totalCount / PER_PAGE)}
          whatPage={"items"}
        />
      </>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const data = await getAllItem();

  const { totalCount } = data;
  const paths = range(1, Math.ceil(totalCount / PER_PAGE)).map(
    (i) => `/items/page/${i}`
  );
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (
  context
): Promise<{
  props: Props;
}> => {
  const numId = Number(context.params.id);
  const offset = (numId - 1) * PER_PAGE;

  const data = await getItem({ limit: PER_PAGE, offset: offset });

  return {
    props: {
      items: data.contents,
      totalCount: Number(data.totalCount),
      currentPageNumber: numId,
    },
  };
};

export default ItemPageId;
