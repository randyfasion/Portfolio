import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const Footer = () => {
    return (
        <footer className="bg-dark p-3 shadow footer">
        <Container>
          <Row>
            <Col sm={12} md={6} className="m-md-0">
              <p className="m-md-0 copyright">© 2021 Randy Faison </p>
            </Col>
            <Col className="lg={true}" >
            <p>Contact Me</p>
            </Col>
            <Col sm={12} md={6} className="d-flex justify-content-md-end justify-content-center">
              
            </Col>
          </Row>
        </Container>
      </footer>
    )
}

export default Footer
