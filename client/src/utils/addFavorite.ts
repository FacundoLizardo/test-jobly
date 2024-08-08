import axios from "axios";
import { IFavorite, INews, IResponse } from "./types.ts";
const apiUrl = import.meta.env.VITE_APP_API_URL
const addFavorite = async (data: INews): Promise<IResponse<IFavorite>> => {
  try {
    return {
      success: true,
      data: await axios.post(`${apiUrl}/favorites/new`, data),
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};
export default addFavorite;
