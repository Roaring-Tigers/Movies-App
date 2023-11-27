import React from "react";


const MovieDisplay = ({selectedMovie}) => {
    return(
        <div className="movie-display">
        {
          selectedMovie!=null && (
              <div>
                <h1>{selectedMovie.title}</h1>
                <p>{selectedMovie.year}</p>
                <p>{selectedMovie.runtime}</p>
                <p>{selectedMovie.genres.join(",")}</p>
                
              </div>
          )
        } 
  </div>
    )
}

export default MovieDisplay;