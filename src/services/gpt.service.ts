import Groq from "groq-sdk";
import { fetchMovie } from "./movie.service";
import { Movie } from "../utils/types";

const getGroqChatCompletion = async (gptQuery: string) => {
  const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
  });

  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a movie Recommendation system and you will be suggesting relevant movies based on the query provided.",
      },
      {
        role: "user",
        content: gptQuery,
      },
    ],
    model: "llama-3.1-70b-versatile",
  });
};

const suggestMovies = async (query: string) => {
  try {
    const gptQuery = `Query: "${query}"\nGive me only the names of top 10 most relevant movies based on the query. Give me only a single comma separated string like the example result given ahead and do not add any extra characters. Example Result: Movie1, Movie2, Movie3, Movie4, ...\n`;
    const chatCompletion = await getGroqChatCompletion(gptQuery);
    const gptMoviesNames =
      chatCompletion.choices[0]?.message?.content?.split(", ");
    const gptMoviesDataPromises = gptMoviesNames?.map((movieName) =>
      fetchMovie(movieName)
    );
    let gptMoviesData: Movie[] = [];
    if (gptMoviesDataPromises)
      gptMoviesData = (await Promise.all(gptMoviesDataPromises)).flat();
    return gptMoviesData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { suggestMovies };
