import { useState, useEffect } from 'react';

import '../styles/MoviesFind.css'

const MoviesFind = () => {
    const [inputChange, setInputChange] = useState('');
    const [apiResult, setApiResult] = useState([]);

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
            .then(data => {
                setApiResult(
                    <div key={data.imdbID} className="ResultSearch">
                        <p>{data.Title}</p>
                        <img src={data.Poster} alt={data.Title} />
                        <p>{data.Year}</p>
                    </div>
                )
            })
    }, [inputChange, apiResult, setApiResult, API])

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Wyszukaj swój ulubiony film" className="input__search" onChange={HandleChangeInput} />
            {apiResult}
        </form>
    )
}

export default MoviesFind;