import { Router } from "express";
import { getNews } from "../Handlers/newsHandler";

const newsRoutes = Router();

newsRoutes.get("/", getNews);

export default newsRoutes;
