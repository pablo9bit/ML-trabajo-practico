import { IItem } from "../interfaces/IProduct";
import SEO from "./SEO";

const ProductDetail = ({ item }: { item: IItem }) => {
    return (
      <>
        <SEO
          title={item.title}
          description={item.title}
          name="MercadoLibre"
          type="article"
        />
        <div className="flex gap-10 m-16 bg-white pt-5 pb-5">
          <div className="w-[90%] pl-6">
            <img src={item.picture} width={"400px"} alt={item.title}/>
            <div className="text-xl pb-3 pt-20">Descripción del Producto</div>
            <div>{item.description}</div>
          </div>
          <div className=" pl-20">
            <p>{item.condition === "new" ? "Nuevo" : "Usado"}</p>
            <p className="text-xl font-fold">{item.title}</p>
            <div className="flex text-3xl pt-5">
              <span>{`${
                item.price.currency === "ARS" && "$"
              } ${item.price.amount.toLocaleString("es-ES")}`}</span>
              <span className="text-sm">{item.price.decimals}</span>
            </div>
          </div>
        </div>
      </>
    );
};

export default ProductDetail;
