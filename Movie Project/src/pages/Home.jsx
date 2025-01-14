import MovieCard from "../components/MovieCard.jsx";
import { useState } from "react";

function Home() {

  const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: 'The Shawshank Redemption', date: '14/10/1994'},
        {id: 2, title: 'The Godfather', date: '24/03/1972'},
        {id: 3, title: 'The Godfather: Part II', date: '24/12/1974'},
        {id: 4, title: 'The Dark Knight', date: '09/12/2008'},
    ];

    const handleSearch = () => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("Type something...");
    };


  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input type="text" placeholder="Search for a movie..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <button type="submit">🔍</button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => 
        ( searchQuery === "" || movie.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
        ( <MovieCard movie={movie} key={movie.id} />
            ))}
      </div>
    </div>
  );
}

export default Home;