import React from 'react';
import { INews } from "../utils/types.ts";
import { useFavorites } from "../contexts/FavoritesContext.tsx";
import addFavorite from "../utils/addFavorite.ts";
import { toast } from "./ui/use-toast.ts";
import { Button } from "./ui/button.tsx";
import { FaHeart } from "react-icons/fa";

interface AddFavoriteButtonProps {
  data: INews;
  isFavorite: boolean;
}

const AddFavoriteButton: React.FC<AddFavoriteButtonProps> = ({ data , isFavorite}) => {
  const { fetchFavorites } = useFavorites();

  const handleAddFavorite = async () => {
    try {
      const response = await addFavorite(data);

      toast({
        title: response.message,
        description: response.success ? "Dirígete a tus favoritos para poder verla" : "Aun puedes agregar otras noticias",
      });
      if (response.success) fetchFavorites();
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
      <FaHeart className={`${isFavorite? 'text-red-500' :'text-neutral-500'} h-4 w-4 group-hover:text-red-500 group-hover:scale-125`} />
    </Button>
  );
};

export default AddFavoriteButton;