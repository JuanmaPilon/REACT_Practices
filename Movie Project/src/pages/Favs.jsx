import "../css/Favs.css";
import { useMovieContext } from "../context/MovieContext.jsx";
import MovieCard from "../components/MovieCard.jsx";

function Favorite() {
  const {favorites} = useMovieContext();

  if (favorites){
    return (
      <div className="favorites">
        <h2>Favorites Movies</h2>
      <div className="movies-grid">
        {favorites.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No favorites movies yet</h2>
      <p>Add favorites!</p>
    </div>
  );
}

export default Favorite;
