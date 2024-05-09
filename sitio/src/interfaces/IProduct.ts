export interface IProduct {
  author: IAuthor;
  item: IItem;
}

interface IAuthor {
  name: string;
  lastname: string;
}

export interface IItem {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
}

export interface IListItem {
  author:IAuthor;
  categories: string[];
  items: IItem[];
}
