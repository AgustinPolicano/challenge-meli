import axios from "axios"
import { apiML } from "../utils/global-var";

export const getItemDetails = async (id: string | undefined) => {
  try {
    const url = `${apiML}/getItems/${id}`;

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};