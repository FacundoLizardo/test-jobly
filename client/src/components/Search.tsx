import React from 'react';
import {useState} from "react";
import {INews} from "../utils/types.ts";
import CardsContainer from "./CardsContainer.tsx";
import {SearchBar} from "./SearchBar.tsx";


export const SearchPage = () => {
  const [news, setNews] = useState<INews[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div
      className={
        "flex flex-col h-full w-full items-center justify-center gap-5"
      }
    >
      <SearchBar setState={setNews} setLoading={setLoading} />
      <CardsContainer data={news} loading={loading}/>
    </div>
  );
};
export default SearchPage;
