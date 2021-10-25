import { useState, useEffect } from "react";
import Movies from "./Movies";

const Movielist = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [noMoviesFound, setNoMoviesFound] = useState(false);

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearResults = () => {
    setMovies([]);
    setSearchTerm("");
    localStorage.removeItem("searchTerm");
  };

  useEffect(() => {
    // get movies from local storage
    let term = localStorage.getItem("searchTerm");
    if (term) {
      fetchMovies(term);
    }
  }, []);

  const fetchMovies = (movieName) => {
    const searchUrl = `http://www.omdbapi.com/?s=${movieName}&page=2&apikey=ba99d3`;

    // PUT MOVIE NAME IN LOCAL STORAGE
    localStorage.setItem("searchTerm", movieName);

    fetch(searchUrl)
      .then((response) => response.json())
      .then((result) => {
        if (result.Error) {
          setMovies([]);
          setNoMoviesFound(true);
        } else {
          setMovies(result.Search);
          setNoMoviesFound(false);
        }
      });
  };

  const movieItems = movies.map((movie) => (
    <Movies
      key={movie.imdbID}
      imdbID={movie.imdbID}
      img={movie.Poster}
      title={movie.Title}
      year={movie.Year}
      type={movie.Type}
    />
  ));

  return (
    <div>
      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">Movie Search</h1>
            <p class="lead text-muted">
              We want to help you find the right movie for movie night. Search
              here for that movie.
            </p>
            <p>
              <p>
                <input
                  placeholder="Movie name"
                  type="text"
                  onChange={handleSearchTermChange}
                />
              </p>
              <button
                class="btn btn-primary my-2 me-2"
                onClick={() => fetchMovies(searchTerm)}
              >
                Search
              </button>
              <button class="btn btn-secondary my-2" onClick={clearResults}>
                Clear Results
              </button>
            </p>
          </div>
        </div>
      </section>
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {movieItems}
          </div>
        </div>
        </div>
        {noMoviesFound ? <h1>No movies found</h1> : null}
      </div>
  );
};

export default Movielist;
