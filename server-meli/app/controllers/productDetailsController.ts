import axios from "axios";
import { ItemProductDetail } from "../interfaces/itemProductDetail";
import { apiML, isNumberInteger } from "../helpers/util";

export const productDetails = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    
    if(!id) {
      return res.status(400).json({ error: "Es requerido el id del producto." });
    }
    const responseId = await axios.get(apiML + "/items/" + id, {});
    const responseDescription = await axios.get(
      apiML + "/items/" + id + "/description",
      {}
    );

    let itemInfo = responseId.data;

    let objectToSend: ItemProductDetail = {
      author: {
        name: "Agustin",
        lastname: "Policano Damato",
      },
      item: {
        id: itemInfo.id,
        title: itemInfo.title,
        price: {
          currency: itemInfo.currency_id,
          amount: itemInfo.price,
          decimals: isNumberInteger(itemInfo.price),
        },
        picture: itemInfo.pictures[0]?.url,
        condition: itemInfo.condition,
        free_shipping: itemInfo.shipping.free_shipping,
        sold_quantity: itemInfo.sold_quantity || 0,
        description: responseDescription.data.plain_text,
      },
    };
    res.json(objectToSend);
  } catch (error) {
    res.status(500).json({ message: "Error al buscar productos en Mercado Libre" });
  }
};
