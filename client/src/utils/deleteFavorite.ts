import axios from "axios";
import {INews, IResponse} from "./types.ts";
import {apiUrl} from "./apiUrl.ts";
import {toast} from "../components/ui/use-toast.ts";


const deleteFavorite = async (id: string): Promise<IResponse<INews> | undefined> => {
  try {
    return {
      success: true,
      data: await axios.delete(`${apiUrl}/favorites/delete?id=${id}`),
    };
  } catch (e) {
    toast({
      title: "Algo salio eliminando la noticia",
      description: "Intentalo nuevamente",
    });
  }
};
export default deleteFavorite;
