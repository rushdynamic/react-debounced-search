import { useEffect, useState } from 'react';

interface book {
	Title: string;
	Author: string;
	Genre: string;
	Publisher: string;
	Height: number;
}

const useBooks = () => {
	const [query, setQuery] = useState<string>('');
	const [books, setBooks] = useState<book[]>();

	const fetchBooks = async () => {
		const response = await fetch(`http://localhost:3030/search/${query}`);
		const json = await response.json();
		setBooks(json);
	};

	useEffect(() => {
		if (query.length > 0) fetchBooks();
	}, [query]);

	return { setQuery, books };
};

export { useBooks };
