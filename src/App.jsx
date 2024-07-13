import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './componets/Navbar'
import Home from './views/Home'
import Pokemones from './views/Pokemones'
import { PokeProvaider } from './context/PokeContext'
import PokeViews from './views/PokeViews'

function App() {


  return (
    <PokeProvaider>

      <NavBar />
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route path='/pokemones' element={<Pokemones />}/>
        <Route path='/pokemones/:id' element={<PokeViews />} />        
      </Routes>
    </PokeProvaider>
  )
}

export default App
