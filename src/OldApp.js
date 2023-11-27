import { useState } from "react"
import "./style.css"

let moviesData = [
  {id:1, title: "The Shawshank Redemption", year: 1994, runtime: 142, genres: ["Crime", "Drama"]},
  {id:2, title: "The Godfather", year: 1972, runtime: 175, genres: ["Crime", "Drama"]},
  {id:3, title: "The Dark Knight", year: 2008, runtime: 152, genres: ["Action", "Crime", "Drama", "Thriller"]},
  {id:4, title: "The Godfather: Part II", year: 1974, runtime: 202, genres: ["Crime", "Drama"]},
  {id:5, title: "The Lord of the Rings: The Return of the King", year: 2003, runtime: 201, genres: ["Action", "Adventure", "Drama", "Fantasy"]},
  {id:6, title: "Pulp Fiction", year: 1994, runtime: 154, genres: ["Crime", "Drama"]},
  {id:7, title: "Schindler's List", year: 1993, runtime: 195, genres: ["Biography", "Drama", "History"]},
]


const OldApp = () => {

  const [selectedMovie, setSelectedMovie] = useState(null)

  console.log(selectedMovie)

  return(
    <div>
          {/* Display the title of all movies */}
          <div className="movie-list">
            {
                moviesData.map((item, index)=>(
                  <p onClick={()=>setSelectedMovie(item)}>{item.title}</p>
                ))
            }
          </div>
        
        {/* Display the details of the selected movie */}
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
    </div>
  )
}

export default OldApp;