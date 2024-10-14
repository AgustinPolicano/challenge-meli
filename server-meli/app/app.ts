import axios from "axios";
import { SearchProduct } from "./interfaces/searchProduct";
import { SearchItemsProduct } from "./interfaces/searchItemsProduct";

const express = require("express");

const app = express();
const port = 5000;

const apiML = "https://api.mercadolibre.com/";

const isNumberInteger = (price: number): number | null => {
  if (Number.isInteger(price)) {
    return null;
  } else {
    const decimals = price % 1;
    return decimals;
  }
};


app.post("/searchProducts", async (req: any, res: any) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Es requerido el parametro query." });
  }

  try {
    const response = await axios.get(apiML + 'sites/MLA/search', {
      params: {
        q: query,
      },
    });

    const responseData = response.data.results;
    const filters = response.data.filters;
    let categories: string[] = [];
    filters.map((p: any) => {
      if (p.id === "category") {
        p.values.map((p: any) => {
          categories.push(p.name)
        })
      } else {
        categories === null
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
    console.error("Error en la petición a Mercado Libre:", error);
    res
      .status(500)
      .json({ message: "Error al buscar productos en Mercado Libre" });
  }
});


app.get("/getItems/:id", async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const response = await axios.get(apiML + '/items/' + id, {
    }); 
    console.log(response.data)
    console.log(id)
    res.json(response.data);
  } catch (error) {
    console.error("Error en la petición a Mercado Libre:", error);
    res
      .status(500)
      .json({ message: "Error al buscar productos en Mercado Libre" });
  }
});

app.listen(port, () => {
  console.log("runneando el sv");
});
