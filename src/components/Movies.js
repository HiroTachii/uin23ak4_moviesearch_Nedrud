import React from "react";
const Movies = (props) => {
    return (
        <>
            {props.movies.map((movie) => (
                <div className="movie" key={movie.imdbID}>
                    <div className="movie-inner">
                        <div className="movie-left">
                            <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=Picture+not+available"} alt={movie.Title} />
                        </div>
                        <div className="movie-right">
                            <h2>{movie.Title}</h2>
                            <p>{movie.Year}</p>
                            <p>{movie.Genre}</p>
                            <p>{movie.Director}</p>
                            <p>{movie.Actors}</p>
                            <p>{movie.imdbRating}</p>
                            <p>{movie.Awards}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};
export default Movies;