import React, { useContext } from 'react'
import { Container, Dropdown } from 'react-bootstrap'
import { PokeContext } from '../context/PokeContext'
import { NavLink } from 'react-router-dom'


export const Pokemones = () => {

    const { dataPoke} = useContext(PokeContext)

  return (
    <Container className='d-flex flex-column justify-content-center align-items-center  w-50 h-75'>
      <h1>!Elige tu Pokemon!</h1>
      <Dropdown>
        <Dropdown.Toggle variant='success'>
           Selecciona Pokemon
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {
            dataPoke.map(poke=>(
                <Dropdown.Item key={poke.name} as={NavLink} to={`/pokemones/${poke.name}`} >{poke.name.toUpperCase()}</Dropdown.Item>
            ))
          }
          
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  )
}

export default Pokemones