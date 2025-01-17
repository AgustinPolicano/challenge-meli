
export interface SearchProductsItemsInterface {
    items: [
      {
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
      }
    ]
  }
  