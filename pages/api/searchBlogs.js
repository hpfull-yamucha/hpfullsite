import { client } from "../../libs/client";

const getSearchBlogs = async (req, res) => {
  // クエリの存在チェック
  if (!req.query.keyword) {
    return res.status(404).end();
  }

  const offset = 0;
  const limit = 4;
  const q = req.query.keyword;
  const queries = { offset: offset, limit: limit, q: q };
  const blogs = await client.get({ endpoint: "blogs", queries: queries });

  return res.status(200).json({ blogs: blogs });
};

export default getSearchBlogs;
