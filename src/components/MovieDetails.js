import { useEffect, useState } from 'react'

const MovieDetails = (props) => {

    const [movieDetail, setMovieDetail] = useState({})
    useEffect(() => {
        
        const imdbId = props.match.params.imdbId
        fetchMoviesById(imdbId)
    }, [])

    const fetchMoviesById = (imdbId) => {
        const movieDetailsUrl = `http://www.omdbapi.com/?i=${imdbId}&apikey=ba99d3`
        fetch(movieDetailsUrl)
          .then((response) => response.json())
          .then((result) => {
            setMovieDetail(result)
          });
    }


    return (
      <div>
        <h2>Movie Details</h2>
        <img src={movieDetail.Poster} alt="Batman" />
        <p>Title: {movieDetail.Title}</p>
        <p>Genre: {movieDetail.Genre}</p>
        <p>Director: {movieDetail.Director}</p>
        <p>Actors: {movieDetail.Actors}</p>
        <p>Plot: {movieDetail.Plot}</p>
      </div>
    );
}

export default MovieDetails
