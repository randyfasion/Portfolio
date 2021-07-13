
import React from 'react'
import { Container, Col, Jumbotron, Row } from 'react-bootstrap';
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
                        <Col sm={12} md={6} lg={4} className="justify-content-center">
                            <img className="profilepic" src="/images/Randy.jpg" alt=""

                                width="300vw"
                                height="320vw" 
                                />
                        </Col>
                        <Col className="pl-md-5">
                            <h1 className="title display-4 text-center text-lg-left text-light p-0-lg pt-4">
                                Randy Faison</h1>
                            <h3 className="text-dark text-center text-md-left h3">
                                Full Stack Web Developer!
                </h3>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>


            <Container fluid className="aboutcontainer">
                <Row>
                    <Col>
                    <h1>About Me</h1>
                    <br></br>

                        <p>tesr kjhvghcvjy  h vnnmnvghhv jvkhv  jhvjv  y k  jykyg yjgk gkugk gukgkj  gku gyvkbhv jkg ybk 
                            hjt kvk jgkb  qer h kuyg  gkjgyglu gug uigilgil il g ig  go guigogo
                            jhvjgvkvyulvkuyk ojoph;l[[09y8[    ughliugug  iuh iulg   xxexzwez jv kgyugvkyu v uvykuvuyvgk  ug uyg kug]]]
                        </p>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Aboutme
