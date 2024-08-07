import Favorite from "../../Models/favorites";

const deleteFavoritesController = async (id: string) => {
  try {
    return await Favorite.deleteOne({id: id})
  } catch (error: any) {
    throw new Error(`Error deleting favorite: ${error.message}`);
  }
};

export {deleteFavoritesController};
