import React from 'react';
import { INews } from "../utils/types.ts";
import ArticleCard from "./Card.tsx";

interface CardsContainerProps {
  data: INews[];
  favorites?: INews[];
}

export default function CardsContainer({ data, favorites }: CardsContainerProps) {

  return (
    <section
      className={`grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3 sm:p-6 h-[700px] w-full
      ${data && data.length === 0 ? " overflow-hidden " : " overflow-y-scroll "}`}
    >
      { data &&
        data.length > 0 &&
        data.map((article: INews) => {
          if (article.title === "[Removed]") return;

          const isFavorite = favorites?.some(fav => fav.url === article.url);

          return (
            <ArticleCard
              data={article}
              key={article.url}
              isFavorite={isFavorite ?? false}
            />
          );
        })}
    </section>
  );
}
