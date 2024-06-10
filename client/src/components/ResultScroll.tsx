import { book } from '../types/book';
import Book from './Book';

function ResultScroll({ books }: { books: book[] }) {
	return (
		<div className="max-h-96 w-80 overflow-y-scroll border border-solid border-orange-400 rounded-md p-4 flex flex-col gap-2">
			{books.map((item: book) => (
				<Book {...item} />
			))}
		</div>
	);
}

export default ResultScroll;
