import express from "express";
import firebaseAuthenticate from "../middleware/authentication.middleware";
import {
  getMovieDetails,
  getMovieTrailer,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getNowPlayingMovies,
} from "../controllers/movie.controller";

const movieRouter = express.Router();
movieRouter.get("/now-playing", firebaseAuthenticate, getNowPlayingMovies);
movieRouter.get("/popular", firebaseAuthenticate, getPopularMovies);
movieRouter.get("/top-rated", firebaseAuthenticate, getTopRatedMovies);
movieRouter.get("/upcoming", firebaseAuthenticate, getUpcomingMovies);
movieRouter.get("/trailer/:id", firebaseAuthenticate, getMovieTrailer);
movieRouter.get("/:id", firebaseAuthenticate, getMovieDetails);

export default movieRouter;
