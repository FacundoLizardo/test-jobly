import React from 'react';
import {INews} from "../utils/types.ts";
import {useLocation} from "react-router-dom";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "./ui/card.tsx";
import DeleteFavoriteButton from "./DeleteFavoriteButton.tsx";
import AddFavoriteButton from "./AddFavoriteButton.tsx";



interface ArticleCardProps {
  data: INews;
}

export default function ArticleCard({ data }: ArticleCardProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Card className=" flex flex-col justify-between w-full max-w-md hover:shadow-lg transition-shadow max-h-[500px]">
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
      </CardHeader>
      <CardContent className={"text-left h-full"}>
        {data.description}
      </CardContent>
      <CardFooter className="flex justify-between items-end">
        {currentPath === "/favorites" ? (
          <DeleteFavoriteButton id={data.id ?? ""} />
        ) : (
          <AddFavoriteButton data={data} />
        )}
        <a
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium text-primary-foreground bg-primary rounded-md shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Ir a la fuente
        </a>
      </CardFooter>
    </Card>
  );
}
