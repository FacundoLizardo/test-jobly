import axios from "axios";
import {toast} from "../components/ui/use-toast.ts";


const getFavorites = async () => {
  try {
    return await axios.get(`/favorites`);
  } catch (e) {
    toast({
      title: "Algo salio mal obteniendo tus favoritos",
      description: "Intentalo nuevamente",
    });
  }
};
export default getFavorites;
