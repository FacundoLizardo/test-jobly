import Favorite from "../../Models/favorites";

const getFavoritesController = async () => {
  try {
    return await Favorite.find().then((data) => data);
  } catch (error: any) {
    throw new Error(`Error retrieving favorites: ${error.message}`);
  }
};

export { getFavoritesController };
