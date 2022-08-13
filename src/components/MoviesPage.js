import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const match = useRouteMatch();
  //match takes the string value of the Route encapuslating this component
  console.log(`${match.url}/:movieID`)
  
  return (
    <div>
      <MoviesList movies={movies} />
      <Route path={`${match.url}/:movieID`}>
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
}
export default MoviesPage;
