import './assets/css/App.css' 
import {Routes,Route} from "react-router-dom"
import Home from './assets/pages/Home'
import Navbar from './assets/components/NavBar'
import Favorite from './assets/pages/Favorites'
function App() {


  return (
    <>
      <Navbar/>
    <main className="main_content">
           <Routes>
                   <Route path="/" element={<Home/>}/>
                   <Route path="/favorites" element={<Favorite/>}/>
           </Routes>
    </main>
   
    </>
  )
}

export default App
