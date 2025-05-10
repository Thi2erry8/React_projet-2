import { useState } from "react";
import {searchMovies,getPopularMovies} from "../services/api";
import MovieCard from "../components/MovieCard";
import "../css/Home.css"
function Home() {

    const [searchQuery,setSearchQuery] = useState("") ;

     const movies = [
         {id: 1, title: "John Wick", release_date:"2020", url: "https://via.placeholder.com/150"},
         {id: 2, title: "John Wick", release_date:"1999", url: "https://via.placeholder.com/150"},
         {id: 3, title: "John Wick", release_date:"1998", url: "https://via.placeholder.com/150"}
     ];

     const handleSearch = (e) =>{
        e.preventDefault();
        alert(searchQuery)
        setSearchQuery("")
     }
     return(

            <div className="home">
                  <form onSubmit={handleSearch} className="seach_form">
                          <input type="text"
                                 placeholder="Search for movies"
                                 className="search_input"
                                 value={searchQuery}
                                 onChange={(e) => setSearchQuery(e.target.value)}
                          
                          />
                  </form>

                  <div className="movies_grid">
                    {movies.map((movie)=>
                        movie.title.toLowerCase().startsWith(searchQuery) &&
                        (<MovieCard movie={movie} key={movie.id}/>
                    ))}
                  </div>
            </div>
     );
}
export default Home