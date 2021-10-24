import { useState, useEffect } from 'react'
import Movies from './Movies'

const Movielist = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const [movies, setMovies] = useState([])
    const [noMoviesFound, setNoMoviesFound] = useState(false)

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const clearResults = () => {
        setMovies([])
        setSearchTerm('')
        localStorage.removeItem("searchTerm")
    }

    useEffect(() => {
        // get movies from local storage
        let term = localStorage.getItem("searchTerm")
        if (term) {
            fetchMovies(term);
        }
    }, [])

    const fetchMovies = (movieName) => {
        const searchUrl = `http://www.omdbapi.com/?s=${movieName}&page=2&apikey=ba99d3`;

        // PUT MOVIE NAME IN LOCAL STORAGE
        localStorage.setItem('searchTerm', movieName)

        fetch(searchUrl)
        .then(response => response.json())
        .then(result => {
            if (result.Error) {
                setMovies([])
                setNoMoviesFound(true)
            }else{

                setMovies(result.Search)
                setNoMoviesFound(false);

            }
        })
    }

    const movieItems = movies.map(movie => <Movies key={movie.imdbID} imdbID={movie.imdbID} img={movie.Poster} title = {movie.Title} year = {movie.Year} type = {movie.Type} />)
    
    return (
        <div>
            <h1>Movie List Page</h1>
            Search : <input type='text' onChange={handleSearchTermChange}/>
            <button onClick={() => fetchMovies(searchTerm)}>Search</button>
            <button onClick={clearResults}>Clear Results</button>
            <br />
            <br />
            <div>
                {movieItems}
                {noMoviesFound ? <h1>No movies found</h1> : null}
            </div>
        </div>
    )
}

export default Movielist
