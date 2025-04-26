

export default function MovieCard({movie}) {
  return (
    <>
       <div className="movie-card">
             <div className="movie_poster">
                <img src={movie.url}  />
             </div>
       </div>
    </>
    
  )
}
