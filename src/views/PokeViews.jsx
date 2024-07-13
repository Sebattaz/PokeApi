import React, { useState } from 'react'
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'



const PokeViews = () => {

    const [nom, setNom] = useState(null)
    const [img, setImg] = useState(null)
    const [info, setInfo] = useState([])
    const {id} = useParams();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(data=>{
            setNom(data.name.toUpperCase())
            setImg(data.sprites.other.dream_world.front_default)
            setInfo(data.stats)
        }
        )
    }, [id])

  return (
    <Container className='d-flex  justify-content-center align-items-center  w-50 h-75 mt-5'>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <h1>{nom}</h1>
        <img src={img} alt={nom} />
      </div>
      <div className='d-flex flex-column mx-5'>
            <ul>
                {
                    info.map((inf, index)=>(
                        <h6><li key={index}>{`${inf.stat.name.toUpperCase()} : ${inf.base_stat}`}</li></h6>
                    ))
                }
            </ul>
      </div>
    </Container>
  )
}

export default PokeViews
