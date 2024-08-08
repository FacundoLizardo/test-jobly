import React from 'react';
import { INews } from "../utils/types.ts";
import { useFavorites } from "../contexts/FavoritesContext.tsx";
import addFavorite from "../utils/addFavorite.ts";
import { toast } from "./ui/use-toast.ts";
import { Button } from "./ui/button.tsx";
import { FaHeart } from "react-icons/fa";

interface AddFavoriteButtonProps {
  data: INews;
}

const AddFavoriteButton: React.FC<AddFavoriteButtonProps> = ({ data }) => {
  const { fetchFavorites } = useFavorites();

  const handleAddFavorite = async () => {
    try {
      const { success } = await addFavorite(data);
      toast({
        title: success ? "La noticia se agregó a favoritos con éxito" : "Algo salió mal",
        description: success ? "Dirígete a tus favoritos para poder verla" : "Lo sentimos, estamos trabajando para solucionarlo",
      });
      if (success) fetchFavorites();
    } catch (error) {
      toast({
        title: "Algo salió mal",
        description: error instanceof Error ? error.message : String(error),
    });
    }
  };

  return (
    <Button
      type="button"
      onClick={handleAddFavorite}
      className="group bg-transparent hover:bg-transparent transition-transform duration-300 transform"
    >
      <FaHeart className="text-neutral-500 h-4 w-4 group-hover:text-red-500 group-hover:scale-125" />
    </Button>
  );
};

export default AddFavoriteButton;