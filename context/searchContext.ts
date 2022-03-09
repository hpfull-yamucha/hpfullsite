import { createContext } from "react";

export interface SearchContextValue {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  companySearch: string;
  setCompanySearch: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext<SearchContextValue>({
  search: "",
  setSearch: () => undefined,
  companySearch: "",
  setCompanySearch: () => undefined,
});
