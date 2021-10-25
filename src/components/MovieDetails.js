import { useEffect, useState } from "react";

const MovieDetails = (props) => {
  const [movieDetail, setMovieDetail] = useState({});
  useEffect(() => {
    const imdbId = props.match.params.imdbId;
    fetchMoviesById(imdbId);
  }, []);

  const fetchMoviesById = (imdbId) => {
    const movieDetailsUrl = `http://www.omdbapi.com/?i=${imdbId}&apikey=ba99d3`;
    fetch(movieDetailsUrl)
      .then((response) => response.json())
      .then((result) => {
        setMovieDetail(result);
      });
  };

  return (
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col col-lg-9 mt-5">
          <img src={movieDetail.Poster} alt="poster" />
          <h2>Title: {movieDetail.Title}</h2>
          <table class="table table-hover">
            <tbody>
              <tr>
                <th scope="row">Released:</th>
                <td>{movieDetail.Released}</td>
              </tr>
              <tr>
                <th scope="row">Genre:</th>
                <td>{movieDetail.Genre}</td>
              </tr>
              <tr>
                <th scope="row">Director:</th>
                <td>{movieDetail.Director}</td>
              </tr>
              <tr>
                <th scope="row">Actors:</th>
                <td>{movieDetail.Actors}</td>
              </tr>
              <tr>
                <th scope="row">Plot:</th>
                <td>{movieDetail.Plot}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
