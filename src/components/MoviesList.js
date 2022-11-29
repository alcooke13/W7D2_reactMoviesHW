import React from "react";
import Movie from "./Movie";


const MoviesList = ({movies}) => {
    
    const movieNodes = movies.map((movie) => {
        return (
            <li>
            <a href={movie.url}>
            <Movie name={movie.name} key={movie.id}> {movie.name}</Movie>
            </a>
            </li>
        );
    });

    return (
        <div>
            {movieNodes} 
        </div>
    );
};

export default MoviesList;