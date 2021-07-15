import React from 'react'


// import react-bootstrap components
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

const Skills = () => {
    return (
        <>
  
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

export default Skills
