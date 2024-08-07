import Favorite, { IFavorites } from "../../Models/favorites";

const postFavoritesController = async (data: IFavorites) => {
  try {
    const newFavorite = new Favorite(data);
    return await newFavorite.save();
  } catch (error: any) {
    throw new Error(`Error creating favorite: ${error.message}`);
  }
};

export { postFavoritesController };
