export interface SearchDetailItemModel {
  id: string;
  picture: string;
  price: {
    amount: number
  };
  free_shipping: boolean;
  title: string;
}
