import express, { Router } from 'express';
import { getAllBooks, getBook } from '../db';

const router: Router = express.Router();

router.get('/books', (req, res) => {
	res.json(getAllBooks());
});

router.get('/search/:bookName', (req, res) => {
	res.send(getBook(req.params.bookName));
});

export default router;
