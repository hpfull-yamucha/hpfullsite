import React, { useState } from "react";
import { AppProps } from "next/app";
import "styles/globals.css";
import "tailwindcss/tailwind.css";
import * as gtag from "libs/gtag";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { SearchContext } from "context/searchContext";
import { SearchQuery } from "types";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const [companySearch, setCompanySearch] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string): void => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return (): void => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    const urlQuery = router.query as SearchQuery;
    if (urlQuery && urlQuery.keyword) {
      setSearch(urlQuery.keyword);
      setCompanySearch(urlQuery.keyword);
    } else {
      setSearch("");
      setCompanySearch("");
    }
  }, [router]);

  return (
    <SearchContext.Provider
      value={{ search, setSearch, companySearch, setCompanySearch }}
    >
      <Component {...pageProps} />
    </SearchContext.Provider>
  );
};

export default MyApp;
