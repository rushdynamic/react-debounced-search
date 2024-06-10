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

const getBook = (bookName: string) => {
	console.log('Searching for: ' + bookName);
	const results = booksList.filter((book: any) =>
		book.Title.toLowerCase().includes(bookName)
	);
	console.log(`Found ${results.length} results for ${bookName}`);
	return results;
};

export { initializeDb, getAllBooks, getBook };
