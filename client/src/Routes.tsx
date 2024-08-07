import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {FavoritesProvider} from "./contexts/FavoritesContext.tsx";
import {NewsProvider} from "./contexts/NewsContext.tsx";
import Navigation from "./components/Navigation.tsx";
import SearchPage from "./components/Search.tsx";
import FavoritesPage from "./components/views/FavoritesPage.tsx";
import {Toaster} from "./components/ui/toaster.tsx";


const AppRoutes = () => {
  return (
    <FavoritesProvider>
      <NewsProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
          <Toaster />
        </Router>
      </NewsProvider>
    </FavoritesProvider>
  );
};

export default AppRoutes;
