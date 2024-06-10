import { useBooks } from './hooks/books';

function App() {
	const { setQuery, books } = useBooks();
	return (
		<div className="h-screen w-screen flex items-center justify-center">
			<div className="flex flex-col gap-2 items-center">
				<input
					placeholder="Search"
					className="w-80 h-10 p-3 rounded-md"
					onChange={(e) => setQuery(e.target.value)}
				/>
				<span>{books?.[0]?.Title}</span>
				<span>{books?.[0]?.Author}</span>
			</div>
		</div>
	);
}

export default App;
