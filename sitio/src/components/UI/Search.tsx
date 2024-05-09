import { useContext, useState } from "react";
import SearchContext from "../../contexts/SearchContext";
import { useLocation, useNavigate } from "react-router-dom";

const Search = () => {
  const url = useLocation();
  const navigate = useNavigate();
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const [searchText, setSearchText] = useState(searchValue);

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchText && setSearchValue(searchText);
    if (url.pathname !== "/items") {
      navigate({ pathname: "/items", search: `?search=${searchText}` });
    }
  };

  return (
    <form className="w-full pl-2 flex" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="w-full h-8 rounded-l pl-1"
        placeholder="Nunca dejes de buscar"
        onChange={(e) => handleSearch(e)}
        value={searchText ? searchText : ""}
      ></input>
      <button type="submit" className="h-8 bg-gray-100 rounded-r px-5">
        <img src="/assets/ic_Search.png" alt="lupa" />
      </button>
    </form>
  );
};

export default Search;
