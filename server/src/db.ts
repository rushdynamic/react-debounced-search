import csv from 'csvtojson';

const csvFile = './resources/books.csv';
let booksList: any[] = [];

const initializeDb = async () => {
	booksList = await csv().fromFile(csvFile);
	console.log('Initialized DB');
};

const getAllBooks = () => {
	return booksList;
};

const getBook = (query: string) => {
	console.log('Searching for: ' + query);
	const results = booksList.filter(
		(book: any) =>
			book.Title.toLowerCase().includes(query) ||
			book.Author.toLowerCase().includes(query)
	);
	console.log(`Found ${results.length} results for ${query}`);
	return results;
};

export { initializeDb, getAllBooks, getBook };
