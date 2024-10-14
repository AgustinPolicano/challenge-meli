import axios from "axios";
import { SearchProduct } from "../interfaces/searchProduct";
import { SearchItemsProduct } from "../interfaces/searchItemsProduct";
import { apiML, isNumberInteger } from "../helpers/util";

export const searchProducts = async (req: any, res: any) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Es requerido el parametro query." });
  }

  try {
    const response = await axios.get(apiML + "sites/MLA/search", {
      params: {
        q: query,
      },
    });

    const responseData = response.data.results;
    const filters = response.data.filters;
    let categories: string[] = [];
    
    filters.forEach((p: any) => {
      if (p.id === "category") {
        p.values.forEach((v: any) => {
          categories.push(v.name);
        });
      }
    });

    let objectToSend: SearchProduct = {
      author: {
        name: "Agustin",
        lastname: "Policano Damato",
      },
      categories: categories,
      items: responseData.map((item: SearchItemsProduct) => ({
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
          decimal: isNumberInteger(item.price),
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
      })),
    };

    res.json(objectToSend);
  } catch (error) {
    res.status(500).json({ message: "Error al buscar productos en Mercado Libre" });
  }
};
