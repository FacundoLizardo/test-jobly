import { useState, useEffect } from "react";
import {INews} from "./types.ts";
import getFavorites from "./getFavorites.ts";
import {toast} from "../components/ui/use-toast.ts";


const useGetFavorites = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [favorites, setFavorites] = useState<INews[]>([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const res = await getFavorites();
        setLoading(false);
        setFavorites(res?.data.data);
      } catch (error) {
        toast({
          title: "Algo salio mal",
          description: `${error}`,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  return { loading, favorites };
};

export default useGetFavorites;
