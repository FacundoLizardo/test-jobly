import React from 'react';
import {IoIosSearch} from "react-icons/io";
import {Input} from "./ui/input.tsx";
import {toast} from "./ui/use-toast.ts";
import {getNews} from "../utils/getNews.ts";

interface SearchBarProps {
  setState: any;
  setLoading: any;
}

export const SearchBar = ({setState, setLoading}: SearchBarProps) => {
  const handleSubmit = async (e: any) => {
    setState([]);
    setLoading(true);
    e.preventDefault();
    const inputValue = e.target.elements.searchInput.value;

    if (!inputValue.length) {
      toast({
        title: "Nada que buscar",
        description: 'Por favor ingrese un titulo para poder buscar las noticias.',
      })
    }

    await getNews(inputValue)
      .then((res) => {
        if (res.data?.articles.length === 0) {
          toast({
            title: "No se encontraron noticias con esas palabras clave",
            description: "Prueba escribiendolo nuevamente",
          });
          return res;
        }
        setLoading(false);
        setState(res.data?.articles);
        return res;
      })
      .catch((error) => {
        setLoading(false);
        toast({
          title: "Algo salio mal, Intentalo nuevamente",
          description: `Error:${error}`,
        });
      });
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      id={"searchBar"}
      className="flex flex-row items-center justify-center w-full p-2 bg-white dark:bg-gray-800 rounded-lg shadow max-w-3xl"
    >
      <Input
        type="text"
        name="searchInput"
        placeholder="Escriba las palabras clave..."
        className="flex-1 text-gray-900 dark:text-white bg-transparent border-none focus:ring-0 mx-2 shadow-none"
      />

      <button type={"submit"} className={"bg-neutral-200"}>
        <IoIosSearch className="text-gray-500 h-6 w-6 "/>
      </button>
    </form>
  );
}
