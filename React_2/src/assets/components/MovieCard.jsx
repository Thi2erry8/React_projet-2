

export default function MovieCard({movie}) {
  function onFavoriteClick(){
           alert("clicked")
  }

  if (!movie) return <div>Film pa disponib</div>;

  return (
    <>
       <div className="movie-card">
             <div className="movie-poster">
                {/* <img src={movie.url}  /> */}
                  <div className="movie-overlay">
                        <button className="favorite-btn" onClick={onFavoriteClick}>
                           ▲
                        </button>
                   </div>
             </div>
             <div className="movie-info">
                   <h3>{movie.title}</h3>
                   <p>{movie.release_date}</p>
             </div>
       </div>
    </>
    
  )
}
