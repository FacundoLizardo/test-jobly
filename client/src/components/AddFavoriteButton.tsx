import React from 'react';
import {INews} from "../utils/types.ts";
import {useFavorites} from "../contexts/FavoritesContext.tsx";
import addFavorite from "../utils/addFavorite.ts";
import {toast} from "./ui/use-toast.ts";
import {Button} from "./ui/button.tsx";
import {FaHeart} from "react-icons/fa";


interface AddFavoriteButtonProps {
  data: INews;
}

const AddFavoriteButton = ({ data }: AddFavoriteButtonProps) => {
  const { refetchFavorites } = useFavorites();
  const handleAddFavorite = async () => {
    try {
      const res = await addFavorite(data);
      if (res.success) {
        toast({
          title: "La noticia se agrego a favoritos con exito",
          description: "Dirigete a tus favoritos para poder verla",
        });
        refetchFavorites();
      }
      if(!res.success){
        toast({
          title: "Algo salio mal ",
          description: "Lo sentimos, estamos trabajando para solucionarlo",
        })
      }

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
      onClick={handleAddFavorite}
      className="bg-transparent hover:bg-transparent transition-transform duration-300 transform group "
    >
      <FaHeart className="text-neutral-500 h-4 w-4 transition-transform duration-300 transform group-hover:text-red-500 group-hover:scale-125" />
    </Button>
  );
};

export default AddFavoriteButton;
