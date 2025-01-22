import { createContext, useState, useContext, useEffect } from "react";

const MovieContex = createContext();

export const useMovieContext = () => useContext(MovieContex);

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storeredFavs = localStorage.getItem("favorites");

        if (storeredFavs) {
            setFavorites(JSON.parse(storeredFavs));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie]);
    }

    const removeFromFavorites = (movie) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId));
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId);
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
    }

    return <MovieContex.Provider value={{}}>
        {children}
        </MovieContex.Provider>;
};