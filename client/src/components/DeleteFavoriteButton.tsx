import React from 'react';
import {useFavorites} from "../contexts/FavoritesContext.tsx";
import deleteFavorite from "../utils/deleteFavorite.ts";
import {toast} from "./ui/use-toast.ts";
import {Button} from "./ui/button.tsx";
import {CgClose} from "react-icons/cg";


interface DeleteFavoriteButtonProps {
  id: string;
}

const DeleteFavoriteButton = ({id}: DeleteFavoriteButtonProps) => {
  const {fetchFavorites} = useFavorites();

  const handleDeleteFavorite = async () => {
    try {
      await deleteFavorite(id);
      fetchFavorites();
      toast({
        title: "La noticia fue eliminada de tus favoritos con exito",
      });
    } catch (error: any) {
      toast({
        title: "Algo salio mal",
        description: `${error}`,
      });
    }
  };

  return (
    <Button
      type={"button"}
      onClick={handleDeleteFavorite}
      className="bg-transparent hover:bg-transparent transition-transform duration-300 transform group"
    >
      <CgClose
        className="text-neutral-500 h-4 w-4 transition-transform duration-300 transform group-hover:text-red-500 group-hover:scale-125"/>
    </Button>
  );
};

export default DeleteFavoriteButton;
