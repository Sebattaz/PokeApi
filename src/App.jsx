import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './componets/Navbar'
import Home from './views/Home'
import Pokemones from './views/Pokemones'
import { PokeProvaider } from './context/PokeContext'

function App() {


  return (
    <PokeProvaider>
      
      <Navbar />
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route path='/pokemones' element={<Pokemones />}/>        
      </Routes>
    </PokeProvaider>
  )
}

export default App
