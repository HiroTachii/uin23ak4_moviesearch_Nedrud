import React from "react";
const Movies = (props) => {
    return(
        <>
        {props.movies.map((movie) => (
            <div key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title}/>
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>
            <p>{movie.Genre}</p>
            <p>{movie.Director}</p>
            <p>{movie.Actors}</p>
            <p>{movie.imdbRating}</p>
            <p>{movie.Awards}</p>
            </div>
        ))} 
       </>
    );
};
export default Movies;