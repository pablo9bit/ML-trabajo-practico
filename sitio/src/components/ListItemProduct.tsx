import { Link } from "react-router-dom";
import { IItem } from "../interfaces/IProduct";

const ListItemProduct = ({ item }: { item: IItem }) => {
  return (
    <Link to={`/items/${item.id}`}>
      <div className="flex mx-16 bg-white pt-2">
        <div className="pl-6">
          <img src={item.picture} width={"100px"} alt={item.title}/>
        </div>
        <div className="flex-row">
          <div className="flex text-xl">
            <span>{`${
              item.price.currency === "ARS" && "$"
            } ${item.price.amount.toLocaleString("es-AR")}`}</span>
            <span className="text-sm">{item.price.decimals}</span>
            {item.free_shipping && (
              <img
                src="/public/assets/ic_shipping.png"
                className="pl-1 h-4 w-4"
                alt="envio gratis"
              />
            )}
          </div>
          <div>{item.title}</div>
        </div>
      </div>
    </Link>
  );
};

export default ListItemProduct;
