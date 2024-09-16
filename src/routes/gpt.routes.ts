import express from "express";
import firebaseAuthenticate from "../middleware/authentication.middleware";
import { getSuggestedMovies } from "../controllers/gpt.controller";

const gptRouter = express.Router();
gptRouter.get("/suggest-movies", firebaseAuthenticate, getSuggestedMovies);

export default gptRouter;
