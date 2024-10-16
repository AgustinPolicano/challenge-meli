export interface ItemInterface {
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
  
  export interface AuthorInterface {
    name: string;
    lastname: string;
  }
  
  export interface ItemDetailsInterface {
    author: AuthorInterface;
    item: ItemInterface;
  }
  