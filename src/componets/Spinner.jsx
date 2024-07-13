import React from 'react'
import { Container, Spinner } from 'react-bootstrap'

const SpinnerLoad = () => {
  return (
    <Container className="text-center mt-5">
            <Spinner animation="border" variant="success" />
                <Spinner animation="border" variant="danger" />
                <Spinner animation="border" variant="warning" />
                <Spinner animation="border" variant="info" />
                <Spinner animation="border" variant="light" />
        </Container>
  )
}

export default SpinnerLoad
