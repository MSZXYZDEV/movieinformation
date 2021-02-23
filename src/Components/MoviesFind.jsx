import React, { useState, useEffect } from 'react';
import '../styles/MoviesFind.css'

const MoviesFind = () => {
    const [inputChange, setInputChange] = useState('');
    const [searchMovies, setSearchMovies] = useState([]);
    const API = `http://www.omdbapi.com/?apikey=30f5797&t=${inputChange}`;

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const HandleChangeInput = (e) => {
        setInputChange(e.target.value)
    }

    useEffect(() => {
        fetch(API)
            .then(data => data.json())
            .then(data => setSearchMovies([data]))
        }, [inputChange, searchMovies, setSearchMovies, API])

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Wyszukaj swój ulubiony film" className="input__search" onChange={HandleChangeInput} />
            </form>
            {searchMovies.map((movie, index) => {
                return (
                    <ul key={`${index} - ${movie.Title}`}>
                        <li className="ResultSearch">
                            <p>Tytuł: {movie.Title}</p>
                        </li>
                        <li>
                            <img src={movie.Poster} alt={movie.Title} />
                        </li>
                        <li>
                            <p>Data: {movie.Year}</p>
                        </li>
                        <li>
                            <p>Autorzy: {movie.Actors}</p>
                        </li>
                        <li>
                            <p>Produkcja: {movie.Production}</p>
                        </li>
                        <li>
                            <p>Ocena: {movie.imdbRating}</p>
                        </li>
                    </ul>
                )
            })
            }
        </main>
    )
}

export default MoviesFind;