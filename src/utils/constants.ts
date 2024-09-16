import dotenv from "dotenv";
dotenv.config();

const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export const TMDB_API = Object.freeze({
  NOW_PLAYING_MOVIES_URL: `${TMDB_BASE_URL}/movie/now_playing?page=1`,
  POPULAR_MOVIES_URL: `${TMDB_BASE_URL}/movie/popular?page=1`,
  TOP_RATED_MOVIES_URL: `${TMDB_BASE_URL}/movie/top_rated?page=1`,
  UPCOMING_MOVIES_URL: `${TMDB_BASE_URL}/movie/upcoming?page=1`,
  MOVIE_SEARCH_URL: (movieName: string) => {
    return `${TMDB_BASE_URL}/search/movie?query=${movieName}`;
  },
  MOVIE_DATA_URL: (movieId: number) => {
    return `${TMDB_BASE_URL}/movie/${movieId}`;
  },
  VIDEOS_URL: (movieId: number): string => {
    return `${TMDB_BASE_URL}/movie/${movieId}/videos?language=en-US`;
  },
  API_OPTIONS: {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  },
});
