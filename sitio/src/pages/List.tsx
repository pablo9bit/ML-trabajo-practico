import { useContext, useEffect, useState } from "react";
import ListProducts from "../components/ListProducts";
import SearchContext from "../contexts/SearchContext";
import { getList } from "../services/getData";
import Loading from "../components/UI/Loading";
import { IListItem } from "../interfaces/IProduct";
import NotResults from "../components/UI/NotResults";

const List = () => {
  const { searchValue } = useContext(SearchContext);
  const [data, setData] = useState<IListItem | undefined>(undefined);
  const [state, setState] = useState<"" | "loading" | "success">("");

  useEffect(() => {
    const call = async () => {
      setState("loading");
      setData(await getList(searchValue));
      setState("success");
    };
    call();
  }, [searchValue]);

  if (state === "loading") return <Loading />;
  if (state === "success" && !data) return <NotResults />;
  if (state === "success" && data) return <ListProducts data={data} />;
};

export default List;
