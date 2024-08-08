import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "./ui/alert-dialog.tsx";
import {Button} from "./ui/button.tsx";
import {useFavorites} from "../contexts/FavoritesContext.tsx";
import deleteFavorite from "../utils/deleteFavorite.ts";
import {toast} from "./ui/use-toast.ts";
import {CgClose} from "react-icons/cg";
import React from "react";

interface DeleteFavoriteAlertDialogProps {
  id: string;
}
export function DeleteFavoriteAlertDialog({id}: DeleteFavoriteAlertDialogProps) {
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
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          type={"button"}
          className="bg-transparent hover:bg-transparent transition-transform duration-300 transform group"
        >
          <CgClose
            className="text-neutral-500 h-4 w-4 transition-transform duration-300 transform group-hover:text-red-500 group-hover:scale-125"/>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Seguro quieres eliminar esta noticia de favoritos?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteFavorite}>
            Eliminar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
