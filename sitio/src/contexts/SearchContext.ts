import { createContext } from 'react';


interface ISearchContext {
  searchValue: string;
  setSearchValue: (newSearch: string | undefined) => void;
}

export const defaultValues: ISearchContext = {
    searchValue: '',
    setSearchValue: () => {},
  };

  const SearchContext = createContext<ISearchContext>(defaultValues);

  export default SearchContext;
