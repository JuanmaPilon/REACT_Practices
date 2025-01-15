import "../css/MovieCard.css";


function MovieCard({ movie }) {
  function handleFavClick() {
    console.log(`Clicked on ${movie.title}`);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
      </div>
      <div className="movie-overlay">
        <button onClick={handleFavClick}>🩷</button>
      </div>
      <div className="">
        <h2>{movie.title}</h2>
        <p>{movie.date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
