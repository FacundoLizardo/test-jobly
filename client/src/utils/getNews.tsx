import { INewsData, IResponse } from "./types.ts";

const apiUrl = import.meta.env.VITE_APP_API_URL;

export const getNews = async (
  searchInput: string
): Promise<IResponse<INewsData>> => {
  try {
    const response = await fetch(`${apiUrl}/news?text=${encodeURIComponent(searchInput)}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    return {
      success: true,
      data: result.news,
    };
  } catch (e) {
    return {
      success: false,
      error: "Failed to fetch news",
    };
  }
};
