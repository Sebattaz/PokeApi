import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    
        <div className='navbar d-flex justify-content-end'>
            <NavLink className="mx-3" to={"/"}> 
                Home
            </NavLink>
            |
            <NavLink className="mx-3" to={"/pokemones"}>
                Pokemones
            </NavLink>
        </div>
    
  )
}

export default Navbar
