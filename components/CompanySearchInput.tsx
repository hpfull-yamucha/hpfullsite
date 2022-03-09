import React, { useCallback, useContext } from "react";
import { useRouter } from "next/router";
import { SearchContext } from "../context/searchContext";

export const CompanySearchInput: React.FC = () => {
  const { companySearch, setCompanySearch } = useContext(SearchContext);
  const router = useRouter();

  const handleChangeKeyword = useCallback(
    (e) => {
      setCompanySearch(e.target.value);
    },
    [setCompanySearch]
  );

  const handleClickSearchButton = useCallback(() => {
    router.push({
      pathname: "/company_research/search/", //URL
      query: { keyword: companySearch }, //検索クエリ
    });
  }, [companySearch, router]);

  return (
    <div className="w-10/12 flex lg:w-2/3 xl:w-1/2 justify-end">
      <div className="flex flex-row my-5 shadow-lg">
        <input
          id="search-keyword"
          type="text"
          placeholder={"Search..."}
          value={companySearch}
          onChange={handleChangeKeyword}
          className="w-64 h-11 pl-4"
        />
        <button className="w-12 bg-blue-300" onClick={handleClickSearchButton}>
          検索
        </button>
      </div>
    </div>
  );
};

CompanySearchInput.displayName = "CompanySearchInput";
