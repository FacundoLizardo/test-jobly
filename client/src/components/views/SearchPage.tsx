import React from 'react';
import {useNewsContext} from "../../contexts/NewsContext.tsx";
import {SearchBar} from "../SearchBar.tsx";
import CardsContainer from "../CardsContainer.tsx";
import {useFavorites} from "../../contexts/FavoritesContext.tsx";

export const SearchPage = () => {
  const {news, setNews, loading, setLoading} = useNewsContext();
  const {favorites} = useFavorites();
  return (
    <div
      className={"flex flex-col h-full w-full items-center justify-center gap-5"}
    >
      <SearchBar setState={setNews} setLoading={setLoading}/>
      {
        news.length ?
          <CardsContainer data={news} favorites={favorites}/>
          :
          <div className={'h-[700px]'}>
            {loading ?
              'Cargando...'
              :
              <h1
                className="text-center text-xl font-semibold text-gray-700 mt-16 p-4 h-[700px]">
                Los resultados de la busqueda apareceran en esta sección.
              </h1>}

          </div>
      }
    </div>
  );
};

export default SearchPage;
