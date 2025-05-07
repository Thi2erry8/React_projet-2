import { useState } from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from './assets/pages/Home'
import Favorite from './assets/pages/Favorites'
function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="main_content">
           <Route path="/" element={<Home/>}/>
           <Route path="/favorites" element={<Favorite/>}/>
    </main>
  )
}

export default App
