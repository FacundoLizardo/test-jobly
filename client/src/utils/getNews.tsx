import axios from "axios";
import {INewsData, IResponse} from "./types.ts";

export const getNews = async (
  searchInput: string,
): Promise<IResponse<INewsData>> => {
  try {
    const { data } = await axios.get(`/news?text=${searchInput}`);
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
