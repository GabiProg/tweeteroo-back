import chalk from 'chalk';
import cors from 'cors';
import express, { json } from 'express';
import dotenv from "dotenv";
import tweetsRouter from './routes/tweetsRouter.js';
dotenv.config();

const app = express();

app.use(cors());
app.use(json());

app.use(tweetsRouter);

app.listen(process.env.PORT, () => {
  console.log(chalk.bold.blue('Servidor funfando de boas!!!'));
});
