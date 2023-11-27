import React,{useState} from "react";
import moviesData from "../datas/moviesData";

import MovieDisplay from "./MovieDisplay";

const MovieList = ({updateSelection}) => {

    return(
        <div className="movie-list">
            {
                moviesData.map((item, index)=>(
                  <p onClick={()=>updateSelection(item)}>{item.title}</p>
                ))
            }

            {/* <MovieDisplay selectedMovie={selectedMovie} /> */}
          </div>
    )
}

export default MovieList;