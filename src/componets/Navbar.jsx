import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { TbPokeball } from "react-icons/tb";


const NavBar = () => {
  return (
    <Navbar className='bg-body-tertiary d-flex w-100'>
        <Container>
        <Navbar.Brand href="/"><h1><TbPokeball /></h1></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          
          <NavLink className="mx-3" to={"/"}> 
                Home
            </NavLink>
            |
            <NavLink className="mx-3" to={"/pokemones"}>
                Pokemones
            </NavLink>
          
        </Navbar.Collapse>
      </Container>
        <div className='justify-content-end'>
            
        </div>
    </Navbar>
  )
}

export default NavBar
