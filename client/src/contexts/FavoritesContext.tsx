import React, {createContext, ReactNode, useContext, useEffect, useState,} from "react";
import {INews} from "../utils/types.ts";
import getFavorites from "../utils/getFavorites.ts";
import {toast} from "../components/ui/use-toast.ts";


interface FavoritesContextType {
  loading: boolean;
  favorites: INews[];
  fetchFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({
                                                                       children,
                                                                     }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [favorites, setFavorites] = useState<INews[]>([]);

  const fetchFavorites = async () => {
    try {
      setLoading(true);
      const res = await getFavorites();
      setFavorites(res?.data.data);
      setLoading(false);
    } catch (error) {
      toast({
        title: "Algo salio mal",
        description: `${error}`,
      });
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <FavoritesContext.Provider
      value={{loading, favorites, fetchFavorites}}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
