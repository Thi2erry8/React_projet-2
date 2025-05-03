

export default function MovieCard({movie}) {
  function onFavoriteClick(){
           alert("clicked")
  }

  return (
    <>
       <div className="movie-card">
             <div className="movie_poster">
                <img src={movie.url}  />
                  <div className="movie_overlay">
                        <button className="favorite_btn" onClick={onFavoriteClick}>
                           ▲
                        </button>
                   </div>
             </div>
             <div className="movie_info">
                   <h3>{movie.title}</h3>
                   <p>{movie.realse_date}</p>
             </div>
       </div>
    </>
    
  )
}
