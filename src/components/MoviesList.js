import React from 'react'
import { Link } from 'react-router-dom';

export default function MoviesList({movies}) {
    //create an array of links that change the URL when clicked
    const renderMovies = Object.keys(movies).map((movieID) => (
        <li key={movieID}>
            <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
        </li>
    ));
    return (
        <ul>{renderMovies}</ul>
    )
}
