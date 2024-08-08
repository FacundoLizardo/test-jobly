import axios from "axios";
import { IFavorite, INews, IResponse } from "./types.ts";
const apiUrl = import.meta.env.VITE_APP_API_URL
const addFavorite = async (data: INews): Promise<IResponse<IFavorite>> => {
  try {
    const response =  await axios.post(`${apiUrl}/favorites/new`, data)

    return {
      success: response.data.success,
      data: response.data.data,
      message: response.data.message
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};
export default addFavorite;
