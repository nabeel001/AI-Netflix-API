import express, { Application, Request, Response } from "express";
import gptRouter from "./routes/gpt.routes";
import movieRouter from "./routes/movie.routes";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app: Application = express();
const port: string = process.env.PORT || "3000";

app.use(cors());
app.use("/gpt", gptRouter);
app.use("/movies", movieRouter);
app.use("/movie", movieRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Neflix GPT API");
});

app.listen(port, () => {
  console.log(`Connected successfully on port ${port}`);
});
