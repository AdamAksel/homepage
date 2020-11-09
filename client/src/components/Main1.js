import React, { useState } from 'react'
import { Row, Col, Card, Container, Image } from 'react-bootstrap'

const Main1 = () => {
  var [info, setInfo] = useState(1)

  const infoHandler = () => {
    if (info === 4) {
      setInfo(1)
    } else {
      setInfo((info = info + 1))
    }
  }

  return (
    <Container fluid>
      <Card>
        <Row className='justify-content-md-center py-5'>
          <Col md>
            <Image
              alt='Adam'
              src={require('./img/AdamCarlsson.jpg')}
              roundedCircle
              fluid
            />
          </Col>
          <Col md>
            <div onClick={infoHandler} className='infodiv'>
              {info === 1 ? (
                <div>
                  <h4>I am a programmer by trade</h4>
                  <h4>but a postalworker at heart</h4>
                </div>
              ) : info === 2 ? (
                <div>
                  <h4>The factory shut down,</h4>
                  <h4>i had to re-educate</h4>
                </div>
              ) : info === 3 ? (
                <div>
                  <h4>I remembered the</h4>
                  <h4>"learn to code" meme</h4>
                  <h4>and here we are</h4>
                </div>
              ) : (
                <div>
                  <h4>Have a good day!</h4>
                  <h4>//Adam</h4>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default Main1
