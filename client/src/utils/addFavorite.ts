import axios from "axios";
import { IFavorite, INews, IResponse } from "./types.ts";
import {apiUrl} from "./apiUrl.ts";


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
