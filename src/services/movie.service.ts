import axios from "axios";
import { TMDB_API } from "../utils/constants";
import { Movie, Video } from "../utils/types";

const fetchMovie = async (movieName: string) => {
  try {
    const { data } = await axios.get(
      TMDB_API.MOVIE_SEARCH_URL(movieName),
      TMDB_API.API_OPTIONS
    );
    return data.results.filter((movie: Movie) => movie.title === movieName);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const fetchMovieDetails = async (movieId: number) => {
  try {
    const [movieResponse, videoResponse] = await Promise.all([
      axios.get(TMDB_API.MOVIE_DATA_URL(movieId), TMDB_API.API_OPTIONS),
      axios.get(TMDB_API.VIDEOS_URL(movieId), TMDB_API.API_OPTIONS),
    ]);
    const movieData = movieResponse.data;
    const videoData = videoResponse.data;

    const trailerVideos = videoData.results.filter(
      (video: Video) =>
        (video.official && video.type === "Trailer") || video.type === "Trailer"
    );
    return { ...movieData, trailerVideo: trailerVideos[0] };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const fetchMovieTrailer = async (movieId: number) => {
  try {
    const { data } = await axios.get(
      TMDB_API.VIDEOS_URL(movieId),
      TMDB_API.API_OPTIONS
    );
    const trailerVideos = data.results.filter(
      (video: Video) =>
        (video.official && video.type === "Trailer") || video.type === "Trailer"
    );
    return trailerVideos[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const fetchNowPlayingMovies = async () => {
  try {
    const { data } = await axios.get(
      TMDB_API.NOW_PLAYING_MOVIES_URL,
      TMDB_API.API_OPTIONS
    );
    return data.results;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const fetchPopularMovies = async () => {
  try {
    const { data } = await axios.get(
      TMDB_API.POPULAR_MOVIES_URL,
      TMDB_API.API_OPTIONS
    );
    return data.results;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const fetchTopRatedMovies = async () => {
  try {
    const { data } = await axios.get(
      TMDB_API.TOP_RATED_MOVIES_URL,
      TMDB_API.API_OPTIONS
    );
    return data.results;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const fetchUpcomingMovies = async () => {
  try {
    const { data } = await axios.get(
      TMDB_API.UPCOMING_MOVIES_URL,
      TMDB_API.API_OPTIONS
    );
    return data.results;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export {
  fetchMovie,
  fetchMovieDetails,
  fetchMovieTrailer,
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
};
