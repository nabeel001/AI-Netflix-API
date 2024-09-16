import { Request, Response } from "express";
import { suggestMovies } from "../services/gpt.service";

const getSuggestedMovies = async (req: Request, res: Response) => {
  try {
    const movieQuery = req.query.movieQuery;
    const suggestedMovies = await suggestMovies(movieQuery as string);
    res.send(suggestedMovies);
  } catch (error) {
    res.sendStatus(500);
  }
};

export { getSuggestedMovies };
