import { book } from '../types/book';

function Book({ Title, Author }: book) {
	return (
		<div className="flex flex-col gap-0.5">
			<span>{Title}</span>
			<span>{Author}</span>
			<hr></hr>
		</div>
	);
}

export default Book;
