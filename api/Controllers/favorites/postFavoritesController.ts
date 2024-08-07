import Favorite, { IFavorites } from "../../Models/favorites";

const postFavoritesController = async (data: IFavorites) => {
  try {
    const newFavorite = new Favorite(data);
    console.log({newFavorite})
    return await newFavorite.save();
  } catch (error: any) {
    console.log({error})
    throw new Error(`Error creating favorite: ${error.message}`);
  }
};

export { postFavoritesController };
