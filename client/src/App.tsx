import { useBooks } from './hooks/books';
import { useDebouncedFn } from './hooks/common';
import ResultScroll from './components/ResultScroll';

function App() {
	const { setQuery, books } = useBooks();
	const debouncedSetQuery = useDebouncedFn(setQuery, 500);
	return (
		<div className="h-screen w-screen flex items-center justify-center">
			<div className="flex flex-col gap-4 items-center">
				<input
					placeholder="Search"
					className="w-80 h-10 p-3 rounded-md"
					onChange={(e) => debouncedSetQuery(e.target.value)}
				/>
				{books.length > 0 ? (
					<ResultScroll books={books} />
				) : (
					<span>No results</span>
				)}
			</div>
		</div>
	);
}

export default App;
