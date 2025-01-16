import MovieCard from "../components/MovieCard.jsx";
import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../services/api.js";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = () => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("Type something...");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) =>
          (searchQuery === "" ||
            movie.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
          <MovieCard movie={movie} key={movie.id} />
        )}
      </div>
    </div>
  );
}

export default Home;
