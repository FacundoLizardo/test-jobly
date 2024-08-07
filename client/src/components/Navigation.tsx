import React from 'react';
import { Link, useLocation } from "react-router-dom";
import {Button} from "./ui/button.tsx";

const Navigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div
      className={
        "flex flex-col md:flex-row items-center justify-center w-full gap-6 md:gap-20 mb-10"
      }
    >
      <Link to="/" className="no-underline">
        <Button
          className={`px-6 py-3 md:px-10 md:py-5 ${
            currentPath === "/"
              ? "bg-blue-500 text-white"
              : "bg-transparent text-black"
          }`}
        >
          Buscar noticias
        </Button>
      </Link>

      <Link to="/favorites" className="no-underline">
        <Button
          className={`px-6 py-3 md:px-10 md:py-5 ${
            currentPath === "/favorites"
              ? "bg-blue-500 text-white"
              : "bg-transparent text-black"
          }`}
        >
          Mis favoritos
        </Button>
      </Link>
    </div>
  );
};

export default Navigation;
