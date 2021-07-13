
import React from 'react'
import { Container,Col, Jumbotron, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const Aboutme = () => {
    return (
        <>
        {/* <img
        src={require("../images/IMG_7147.png")} alt="" >
        </img> */}
    <Jumbotron fluid className="mb-0">
        <Container>
          <Row>
            <Col sm={12} md={6}lg={4} className="justify-content-center">
            <img src="/images/Randy.jpg"alt="" 
                roundedCircle
                width="300vw"
                height="300vw"/>
            </Col>
            <Col className="pl-md-5">
                <h1 className="display-4 text-center text-lg-left text-light p-0-lg pt-4">
                  hello, world!</h1>
                <p className="text-dark text-center text-md-left h3">
                  I'm Randy Faison!
                </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

</>
    )
}

export default Aboutme
