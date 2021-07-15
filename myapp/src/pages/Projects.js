import React from 'react'
import '../App.css';
import { Card, Button } from 'react-bootstrap'
import image1 from '../images/1.png'
import image2 from '../images/2.png'
import image3 from '../images/3.png'

const Cards = () => {
  return (


    <Card className="cards" style={{ width: '40rem  ' }}>

      <Card.Img variant="dark" src={image1} />
      <Card.Body className="cardbody">
        <Card.Title>Note Taker</Card.Title>
        <Card.Text>
          Application using Express.js

        </Card.Text>
        <Button variant="dark">GitHub</Button>
        {' '}
        <Button variant="dark">Deployed App</Button>

      </Card.Body>


      <Card.Img variant="dark" src={image2} />
      <Card.Body className="cardbody">
        <Card.Title>Team Profile Generator</Card.Title>
        <Card.Text>
          Application using Object Oriented Programming

    </Card.Text>
        <Button variant="dark"><a href="https://github.com/randyfasion/Team-Profile-Generator" >Github </a></Button>

      </Card.Body>

      <Card.Img variant="dark" src={image3} />
      <Card.Body className="cardbody">
        <Card.Title>Workout Tracker</Card.Title>
        <Card.Text>
          Application using MongoDB
    </Card.Text>
        <Button variant="dark">Github</Button>
        {' '}

        <Button variant="dark">Deployed App</Button>

      </Card.Body>


    </Card>

  )
}

export default Cards

