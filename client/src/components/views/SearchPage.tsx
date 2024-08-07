import React from 'react';
import {useNewsContext} from "../../contexts/NewsContext.tsx";
import {SearchBar} from "../SearchBar.tsx";
import CardsContainer from "../CardsContainer.tsx";

export const SearchPage = () => {
  const {news, setNews, loading, setLoading} = useNewsContext();

  return (
    <div
      className={
        "flex flex-col h-full w-full items-center justify-center gap-5"
      }
    >
      <SearchBar setState={setNews} setLoading={setLoading}/>
      {
        news.length ?
          <CardsContainer loading={loading} data={news}/>
          :
          <div className={'h-[700px]'}>
            <h1
              className="text-center text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 mt-10 p-4 h-[700px]">
              Los resultados de la busqueda apareceran en esta sección.
            </h1>
          </div>
      }
    </div>
  );
};

export default SearchPage;
