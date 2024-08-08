import axios from "axios";
import { IFavorite, INews, IResponse } from "./types.ts";
const apiUrl = import.meta.env.VITE_APP_API_URL
const addFavorite = async (newsData: INews): Promise<IResponse<IFavorite>> => {
  try {
    const {data} =  await axios.post(`${apiUrl}/favorites/new`, newsData)

    return {
      success: data.success,
      data: data.message,
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};
export default addFavorite;
