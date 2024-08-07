import { Router } from "express";
import { getFavorites, postFavorites } from "../Handlers/favoritesHandler";

const favoritesRoutes = Router();

favoritesRoutes.get("/", getFavorites);
favoritesRoutes.post("/new", postFavorites);

export default favoritesRoutes;
