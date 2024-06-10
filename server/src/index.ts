import express, { Express } from 'express';
import cors, { CorsOptions } from 'cors';
import booksRouter from './routes/books';
import { initializeDb } from './db';

const app: Express = express();
const port: Number = 3030;

initializeDb();

app.use(cors());
app.use(booksRouter);

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
