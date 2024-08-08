import axios from "axios";
import {toast} from "../components/ui/use-toast.ts";

const apiUrl = import.meta.env.VITE_APP_API_URL
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
