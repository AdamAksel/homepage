import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Container>
        <Row className='justify-content-md-center py-3'>
          <Col md={6}>
            <h3>Hello, I'm Adam Carlsson</h3>
          </Col>
        </Row>

        <Row className='justify-content-md-center py-1'>
          <Col md={2}>
            <Image
              className='h-100 w-100'
              alt='Adam'
              src={require('./img/AdamCarlsson.jpg')}
              roundedCircle
            />
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header
