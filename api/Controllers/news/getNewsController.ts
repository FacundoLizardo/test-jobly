import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const apiKey = process.env.NEWS_API_APIKEY;

const getNewsController = async (string: string) => {
  try {
    return await axios
      .get(`https://newsapi.org/v2/everything?q=${string}&apiKey=${apiKey}`)
      .then((value) => value.data);
  } catch (error: any) {
    throw new Error(`Error retrieving news: ${error.message}`);
  }
};

export { getNewsController };
