import { Request, Response } from "express";
import {
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
  fetchMovieDetails,
  fetchMovieTrailer,
} from "../services/movie.service";

const getMovieDetails = async (req: Request, res: Response) => {
  try {
    const movieId = req.params.id;
    const movieDetails = await fetchMovieDetails(Number(movieId));
    res.send(movieDetails);
  } catch (error) {
    res.sendStatus(500);
  }
};

const getMovieTrailer = async (req: Request, res: Response) => {
  try {
    const movieId = req.params.id;
    const movieTrailer = await fetchMovieTrailer(Number(movieId));
    res.send(movieTrailer);
  } catch (error) {
    res.sendStatus(500);
  }
};

const getNowPlayingMovies = async (req: Request, res: Response) => {
  try {
    const nowPlayingMovies = await fetchNowPlayingMovies();
    res.send(nowPlayingMovies);
  } catch (error) {
    res.sendStatus(500);
  }
};

const getPopularMovies = async (req: Request, res: Response) => {
  try {
    const popularMovies = await fetchPopularMovies();
    res.send(popularMovies);
  } catch (error) {
    res.sendStatus(500);
  }
};

const getTopRatedMovies = async (req: Request, res: Response) => {
  try {
    const topRatedMovies = await fetchTopRatedMovies();
    res.send(topRatedMovies);
  } catch (error) {
    res.sendStatus(500);
  }
};

const getUpcomingMovies = async (req: Request, res: Response) => {
  try {
    const upcomingMovies = await fetchUpcomingMovies();
    res.send(upcomingMovies);
  } catch (error) {
    res.sendStatus(500);
  }
};

export {
  getMovieDetails,
  getMovieTrailer,
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
};
