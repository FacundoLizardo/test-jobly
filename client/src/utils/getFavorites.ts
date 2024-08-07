import axios from "axios";
import {apiUrl} from "./apiUrl.ts";
import {toast} from "../components/ui/use-toast.ts";


const getFavorites = async () => {
  try {
    return await axios.get(`${apiUrl}/favorites`);
  } catch (e) {
    toast({
      title: "Algo salio mal obteniendo tus favoritos",
      description: "Intentalo nuevamente",
    });
  }
};
export default getFavorites;
