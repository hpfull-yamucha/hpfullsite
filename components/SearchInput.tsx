import React, { useCallback, useContext } from "react";
import { useRouter } from "next/router";
import { SearchContext } from "../context/searchContext";

export const SearchInput: React.FC = React.memo(() => {
  const { search, setSearch } = useContext(SearchContext);
  const router = useRouter();

  const handleChangeKeyword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setSearch(e.target.value);
    },
    [setSearch]
  );

  const handleClickSearchButton = useCallback(() => {
    router.push({
      pathname: "/blogs/search/", //URL
      query: { keyword: search }, //検索クエリ
    });
  }, [search, router]);

  return (
    <div className="flex flex-row my-5 shadow-lg">
      <input
        id="search-keyword"
        type="text"
        placeholder={"Search..."}
        value={search}
        onChange={handleChangeKeyword}
        className="w-64 h-11 pl-4"
      />
      <button className="w-12 bg-blue-300" onClick={handleClickSearchButton}>
        検索
      </button>
    </div>
  );
});

SearchInput.displayName = "SearchInput";
