import axios from "axios"
import { apiML } from "../utils/global-var";

export const searchProducts = async (search: string) => {
  try {
    const url = `${apiML}/searchProducts?query=${encodeURIComponent(search)}`;

    const response = await axios.post(url);

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};