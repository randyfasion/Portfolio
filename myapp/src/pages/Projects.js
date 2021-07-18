import React from 'react'
import '../App.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import image1 from '../images/1.png'
import image2 from '../images/2.png'
import image3 from '../images/3.png'
import image4 from '../images/4.png'

const Cards = () => {
  return (

<>

<Container fluid className="aboutmecontainer2">
    <Container className="p-5">
        <Row>
            <Col>
                <h1 className="projecttitle">Projects...</h1>

            </Col>
        </Row>
    </Container>
</Container>

    <Card className="cards" style={{ width: '40rem  ' }}>

      <Card.Img variant="dark" src={image1} />
      <Card.Body className="cardbody">
        <Card.Title className="subtitle">Note Taker</Card.Title>
        <Card.Text>
          Application using Express.js
        </Card.Text>
        <Button variant="dark"> <a href="https://github.com/randyfasion/Note-Taker"  >GitHub</a></Button>
        {' '}
        <Button variant="dark"> <a href="https://randynotetaker.herokuapp.com/"  >Deployed App</a></Button>

      </Card.Body>

      <Card.Img variant="dark" src={image3} />
      <Card.Body className="cardbody">
        <Card.Title className="subtitle">Workout Tracker</Card.Title>
        <Card.Text>
          Application using MongoDB
    </Card.Text>
        <Button variant="dark"> <a href="https://github.com/randyfasion/Workout-Tracker" >Github </a></Button>
        {' '}

        <Button variant="dark"> <a href="https://agile-thicket-44516.herokuapp.com/" >Deployed App</a></Button>

      </Card.Body>

      <Card.Img variant="dark" src={image4} />
      <Card.Body className="cardbody">
        <Card.Title className="subtitle">Read Me Generator</Card.Title>
        <Card.Text>
          README.md Generator using NODE.js

    </Card.Text>
        <Button variant="dark"><a href="https://github.com/randyfasion/README-Generator" >Github </a></Button>

      </Card.Body>

      <Card.Img variant="dark" src={image2} />
      <Card.Body className="cardbody">
        <Card.Title className="subtitle">Team Profile Generator</Card.Title>
        <Card.Text>
          Application using Object Oriented Programming

    </Card.Text>
        <Button variant="dark"><a href="https://github.com/randyfasion/Team-Profile-Generator" >Github </a></Button>

      </Card.Body>




    </Card>
</>
  )
}

export default Cards

