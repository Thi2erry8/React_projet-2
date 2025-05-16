import './assets/css/App.css' 
import {Routes,Route} from "react-router-dom"
import Home from './assets/pages/Home'
import Navbar from './assets/components/NavBar'
import Favorite from './assets/pages/Favorites'
import {MovieProvider} from './assets/context/MovieContext'
function App() {


  return (
    <MovieProvider>
      <Navbar/>
    <main className="main_content">
           <Routes>
                   <Route path="/" element={<Home/>}/>
                   <Route path="/favorites" element={<Favorite/>}/>
           </Routes>
    </main>
   
    </MovieProvider>
  )
}

export default App
