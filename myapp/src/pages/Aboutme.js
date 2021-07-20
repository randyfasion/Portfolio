
import React from 'react'
import { Container, Col, Jumbotron, Row, CardDeck, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import  IMG_0233  from '../images/IMG_0233.jpg'

//animations
// import React, { Component } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { bounce } from 'react-animations';


import '../App.css';


// const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`; 


//       <Bounce><h1>hello animation </h1></Bounce>


const Aboutme = () => {
    return (
        <>
            {/* <img
        src={require("../images/IMG_7147.png")} alt="" >
        </img> */}
            <Jumbotron fluid className="bigc ">
                <Container>
                    <Row>
                        <Col  className="justify-content-center">
                            <img className="profilepic" src={IMG_0233} alt=""

                                width="400vw"
                                // height="420vw"
                            />
                        </Col>
                        <Col  className="topname">
                            <h1 className="title display-8 text-center  text-light p-0-lg pt-6">
                                Randy Faison</h1>
                            <h3 className="caption text-light text-center text-md-left h3">
                                Full Stack Web Developer!
                </h3>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>


            <Container fluid className="aboutmecontainer">
                <Container className="p-5">
                    <Row>
                        <Col>
                            <h1 className="aboutme">About Me</h1>
                            <br></br>
                            <p>
                            Located in Richmond, VA. Open to virtual work and relocation. I am a Full Stack Web Developer leveraging an Information Technology background to build a 
                            more intuitive user experience on the web. Recently earned a certificate in Full Stack 
                            Development from the University of Richmond, with developed skills in JavaScript, 
                            CSS, HTML, and responsive web design. Known as an innovative problem solver thats
                            passionate about developing apps. With each project, my aim is to best engage my audience for an impactful user experience. 
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container >
          <CardDeck className="cont " style={{width: '700px'}}>
            <Card >
              <Card.Body >
                <h3 className="techtitle">Frontend Tech</h3>
                <ul className="list">
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Responsive Design</li>
                  <li>Bootstrap</li>
                  <li>jQuery</li>
                </ul>
              </Card.Body>
            </Card>
           
            <Card>
              <Card.Body>
                <h3 className="techtitle">Backend Tech</h3>
                <ul>
                  <li>SQL</li>
                  <li>APIs</li>
                  <li>REST</li>
                  <li>MongoDB, Mongoose</li>
                  <li>MySQL, Sequelize</li>
                  <li>Express</li>
                  <li>Node</li>
                  <li>GraphQL</li>
                </ul>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
        </>


    )
}



export default Aboutme
