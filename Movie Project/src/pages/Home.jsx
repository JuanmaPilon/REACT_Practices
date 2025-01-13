import MovieCard from "../components/MovieCard.jsx";

function Home() {

    const movies = [
        {id: 1, title: 'The Shawshank Redemption', date: '14/10/1994'},
        {id: 2, title: 'The Godfather', date: '24/03/1972'},
        {id: 3, title: 'The Godfather: Part II', date: '24/12/1974'},
        {id: 4, title: 'The Dark Knight', date: '09/12/2008'},
    ];

  return (
    <div className="home">
      <div className="movies-grid">
        {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
            ))}
      </div>
    </div>
  );
}

export default Home;