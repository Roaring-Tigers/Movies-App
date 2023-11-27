import { useState } from "react"
import "./style.css"

import MovieList from "./Component/MovieList"

import MovieDisplay from "./Component/MovieDisplay"




const App = () => {
     const [selectedMovie, setSelectedMovie] = useState(null)
      
     console.log(selectedMovie)

  return(
    <div>
          {/* Display the title of all movies */}
          <MovieList  updateSelection={setSelectedMovie}/>
        
         {/* Display the details of the selected movie */}

          <MovieDisplay selectedMovie={selectedMovie}/>
          
    </div>
  )
}

export default App;