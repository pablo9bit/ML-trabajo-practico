import React, { useState } from "react";
import SearchContext from "./SearchContext";
import { useSearchParams } from "react-router-dom";

interface IWithChildren {
  children?: React.ReactNode;
}

const SearchProvider: React.FC<IWithChildren> = ({ children }): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState<string>(
    searchParams.get("search") || ""
  );

  const setSearch = (newText: string | undefined) => {
    if (newText && newText !== searchValue) {
      setSearchValue(newText);
      setSearchParams({ search: newText });
    }
  };

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue: setSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
export default SearchProvider;
