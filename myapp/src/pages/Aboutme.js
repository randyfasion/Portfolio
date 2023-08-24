
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
                                Full Stack Engineer
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
                            Full Stack Engineer leveraging both a B.S. degree from Old Dominion University, and a certificate in Full Stack Web development 
                            from the University of Richmond. Currently working as a Software Engineer at UnitedHealth Group. Effective at combining 
                            creativity and problem solving to develop large scale user-friendly applications. Known among staff for strong wit and attention to detail 
                            no matter the project complexity.
                            </p>
                            <br></br>
                            <p>
                            Over the years, I have gained experiences with several technologies, most recently, my time has been spent with Javascript, 
                            React, Typescript, Angular, and PL/SQL. I am an innovative problem solver thats
                            passionate about developing applications. With each project, my aim is to best engage my audience for an impactful user experience. 
                            </p>
{/* 

                            Diligent Full Stack Engineer with experience in commercial application, and software development. Leveraging  both a B.S. degree from 
                            Old Dominion University, and a certificate in Full Stack Web development from the University of Richmond, has led to innovative business 
                            solutions, and the development of large scale user-friendly applications. Known among previous teams for strong wit, and attention to 
                            detail no matter the project complexity.  */}

                           
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
                  <li>REACT</li>
                  <li>Angular</li>
                  <li>Typescript</li>
                  <li>Jest unit testing</li>
                  <li>Java</li>
                  <li>Node.js</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </Card.Body>
            </Card>
           
            <Card>
              <Card.Body>
                <h3 className="techtitle">Backend Tech</h3>
                <ul>
                  <li>PL/SQL</li>
                  <li>APIs</li>
                  <li>REST</li>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                  <li>Express</li>
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
