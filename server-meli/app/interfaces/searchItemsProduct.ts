export interface SearchItemsProduct {
        id: string;
        title: string;
        currency_id: string;
        price: number;
        picture: string;
        condition: string;
        free_shipping: boolean;
        thumbnail: string;
        shipping: {
            free_shipping: boolean;
        }
  }
  