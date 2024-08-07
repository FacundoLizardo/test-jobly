import { Router } from "express";
import {deleteFavorites, getFavorites, postFavorites} from "../Handlers/favoritesHandler";

const favoritesRoutes = Router();

favoritesRoutes.get("/", getFavorites);
favoritesRoutes.post("/new", postFavorites);
favoritesRoutes.delete("/delete", deleteFavorites);

export default favoritesRoutes;
