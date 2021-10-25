import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from './App';
import Movielist from "./components/Movielist";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Movielist} />
      <Route path="/:imdbId" component={MovieDetails} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
