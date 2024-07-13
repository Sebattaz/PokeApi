
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { TbPokeball } from "react-icons/tb";


const NavBar = () => {

    const setActive =({isActive})=>(isActive ? "active" : undefined);
  
    return (
    <Navbar className='bg-secondary d-flex' expand='lg'>
        
        <Navbar.Brand className='mx-5' href="/">
          <h1><TbPokeball /></h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={NavLink} className={`${setActive} mx-3`}  to={"/"}> 
               <h3>Home</h3> 
            </Nav.Link>
            <h3>|</h3>
            <Nav.Link as={NavLink} className={`${setActive} mx-3`} to={"/pokemones"}>
                <h3>Pokemones</h3>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
