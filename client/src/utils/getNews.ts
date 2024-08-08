import { INewsData, IResponse } from "./types.ts";
import axios from "axios";

const apiUrl = import.meta.env.VITE_APP_API_URL;

export const getNews = async (
  searchInput: string,
): Promise<IResponse<INewsData>> => {
  try {
    const { data } = await axios.get(`${apiUrl}/news?text=${searchInput}`);
    return {
      success: true,
      data: data.news,
    };
  } catch (e) {
    return {
      success: false,
      error: "Failed to fetch news",
    };
  }
};
