import { useParams } from "react-router-dom";
import { getDetail } from "../services/getData";
import { useEffect, useState } from "react";
import ProductDetail from "../components/ProductDetail";
import { IProduct } from "../interfaces/IProduct";
import Loading from "../components/UI/Loading";
import NotResults from "../components/UI/NotResults";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState<IProduct>();
  const [state, setState] = useState<"" | "loading" | "success">("");

  useEffect(() => {
    const call = async () => {
      setState("loading");
      const data = await getDetail(id || '');
      setData(data);
      setState("success");
    };
    call();
  }, [id]);

  if (state === "loading" || state === "") return <Loading />;
  if (state === "success" && !data)
    return <NotResults />;
  if (state === "success" && data) return <ProductDetail item={data.item} />;
};

export default Detail;
