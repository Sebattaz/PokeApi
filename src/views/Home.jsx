import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const go = useNavigate();

    const aLaAcccion=()=>{
      go('/pokemones')
    }
  return (
    <Container className='d-flex flex-column justify-content-center align-items-center  w-50 h-75' >
      <h1>¡Bienvenido!</h1>
      <h2>¡Maestro Pokemon!</h2>
      <img src="./src/img/Pikachu.png" alt="Pikachu" className='w-50 h-75'/>
      <Button onClick={aLaAcccion} className='mt-5'>!A la accion!</Button>
    </Container>
  )
}

export default Home
