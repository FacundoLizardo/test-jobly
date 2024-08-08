import React from 'react';
import {useFavorites} from "../../contexts/FavoritesContext.tsx";
import CardsContainer from "../CardsContainer.tsx";


function FavoritesPage() {
  const {loading, favorites} = useFavorites();

  return (
    <div className={"flex flex-col w-full h-[800px] items-center"}>

      {
        favorites.length ?
          <CardsContainer data={favorites}/>
          :
          loading ?
            'Cargando...'
            :
            <h1 className="text-center text-xl md:text-2xl lg:text-2xl font-semibold text-gray-700 mt-10 p-4">
              Agregue sus noticias favoritas para poder verlas en esta sección.
            </h1>


      }
    </div>
  );
}

export default FavoritesPage;
