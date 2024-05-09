import { IItem, IListItem } from "../interfaces/IProduct";
import ListItemProduct from "./ListItemProduct";
import SEO from "./SEO";

const ListProducts = ({ data }: { data: IListItem }) => {
  return (
    <>
      <SEO
        title="ML - Products List"
        description="Products List"
        name="MercadoLibre"
        type="article"
      />
      <div className="pt-5">
        {data.items.map((item: IItem) => (
          <ListItemProduct item={item} />
        ))}
      </div>
    </>
  );
};

export default ListProducts;
