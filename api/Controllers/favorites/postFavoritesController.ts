import Favorite, { IFavorites } from "../../Models/favorites";

const postFavoritesController = async (data: IFavorites) => {
  try {
    const existingFavorite = await Favorite.findOne({ url: data.url });

    if (existingFavorite) {
      return { success: false, message: "Esta noticia ya está en tus favoritos" };
    }

    const newFavorite = new Favorite(data);
    await newFavorite.save();

    return { success: true, message: "Favorito agregado con éxito" };
  } catch (error: any) {
    throw new Error(`Error creating favorite: ${error.message}`);
  }
};

export { postFavoritesController };
