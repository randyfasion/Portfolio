
import React from 'react'
import { Container, Col, Jumbotron, Row, CardDeck, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


import '../App.css';

const Aboutme = () => {
    return (
        <>
            {/* <img
        src={require("../images/IMG_7147.png")} alt="" >
        </img> */}
            <Jumbotron fluid className="bigc bg-dark">
                <Container>
                    <Row>
                        <Col  className="justify-content-center">
                            <img className="profilepic" src="/images/IMG_0233.jpg" alt=""

                                width="400vw"
                                // height="420vw"
                            />
                        </Col>
                        <Col  className="topname">
                            <h1 className="title display-8 text-center  text-light p-0-lg pt-6">
                                Randy Faison</h1>
                            <h3 className="text-light text-center text-md-left h3">
                                Full Stack Web Developer!
                </h3>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>


            <Container fluid className="  bg-light aboutmecontainer">
                <Container className="p-5">
                    <Row>
                        <Col>
                            <h1 className="aboutme">About Me</h1>
                            <br></br>

                            <p>tesr kjhvghcvjy  h vnnmnvghhv jvkhv  jhvjv  y k  jykyg yjgk gkugk gukgkj  gku gyvkbhv jkg ybk
                            hjt kvk jgkb  qer h kuyg  gkjgyglu gug uigilgil il g ig  go guigogo
                            jhvjgvkvyulvkuyk ojoph;l[[09y8[    ughliugug  iuh iulg   xxexzwez jv kgyugvkyu v uvykuvuyvgk  ug uyg kug]]]
                        </p>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container className="cont">
          <CardDeck >
            <Card >
              <Card.Body >
                <h3>Frontend Tech</h3>
                <ul>
                  {/* <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Responsive Design</li>
                  <li>React</li>
                  <li>Bootstrap, Materialize, UIKit</li>
                  <li>jQuery</li> */}
                </ul>
              </Card.Body>
            </Card>
           
            <Card>
              <Card.Body>
                <h3>Backend Tech</h3>
                <ul>
                  {/* <li>Python</li>
                  <li>SQL</li>
                  <li>APIs</li>
                  <li>REST</li>
                  <li>MongoDB, Mongoose</li>
                  <li>MySQL, Sequelize</li>
                  <li>Express</li>
                  <li>Node</li>
                  <li>GraphQL</li>
                  <li>Django</li> */}
                </ul>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
        </>


    )
}



export default Aboutme
