import React, {createContext, useState, ReactNode, useEffect} from "react";
import {INews} from "../utils/types.ts";


interface NewsContextType {
  news: INews[];
  setNews: React.Dispatch<React.SetStateAction<INews[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export const NewsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [news, setNews] = useState<INews[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log({news})
  }, [news]);

  return (
    <NewsContext.Provider value={{ news, setNews, loading, setLoading }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNewsContext = () => {
  const context = React.useContext(NewsContext);
  if (context === undefined) {
    throw new Error("useNewsContext must be used within a NewsProvider");
  }
  return context;
};
