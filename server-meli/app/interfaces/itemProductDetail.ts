export interface ItemProductDetail {
  author: {
    name: string;
    lastname: string;
  };
  item:
    {
      id: string;
      title: string;
      price: {
        currency: string;
        amount: number;
        decimals: number | null;
      };
      picture: string;
      condition: string;
      free_shipping: boolean;
      sold_quantity: number;
      description: string;
    }
}
