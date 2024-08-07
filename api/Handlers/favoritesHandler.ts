import { getFavoritesController } from "../Controllers/favorites/getFavoritesController";
import { Request, Response } from "express";
import { postFavoritesController } from "../Controllers/favorites/postFavoritesController";
import { favoritesSchemaParser } from "../Models/favorites";
import { ZodError } from "zod";

const getFavorites = async (req: Request, res: Response) => {
  try {
    const data = await getFavoritesController();
    data
      ? res.status(200).json({ success: true, data })
      : res
          .status(400)
          .json({ success: false, message: "Failed to fetch favorites" });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const postFavorites = async (req: Request, res: Response) => {
  const data = req.body;

  console.log({data})
  try {
    favoritesSchemaParser.parse(data);

    const response = await postFavoritesController(data);

    res.status(200).json({ success: true, response });
  } catch (error: any) {
    console.log('hubo un error')
    if (error instanceof ZodError) {
      console.log('zod error')
      return res.status(400).json({ error: "Invalid data provided" });
    }

    return res.status(400).json({ error: error.message });
  }
};

export { getFavorites, postFavorites };
