import { useState } from 'react'
import MovieCard from './assets/components/MovieCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <MovieCard/>
    </>
  )
}

export default App
