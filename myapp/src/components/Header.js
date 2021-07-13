import React from 'react'
//import bootstrap
import{ Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Projects from './pages/Projects'
// import {BrowseRouter as Router, Route , Switch, Link } from "react-router-dom";  
import { LinkContainer } from 'react-router-bootstrap'


const styles = {
    NavStyle: {
      // background: 'red',
      fontSize: '20px',
      textDecoration: 'none'
    }
};


const Aboutme = () => {
    return (
        <Nav className="header" style={styles.NavStyle} fill variant="" defaultActiveKey="/home">
    <LinkContainer to="/home">
        <Nav.Item>
            <Nav.Link>About Me</Nav.Link>
        </Nav.Item>
    </LinkContainer>

    <LinkContainer to="/contactme">
        <Nav.Item>
            <Nav.Link>Contact Me</Nav.Link>
        </Nav.Item>
    </LinkContainer>

    <LinkContainer to="/Projects">
        <Nav.Item>
            <Nav.Link>Projects</Nav.Link>
        </Nav.Item>
    </LinkContainer>

    <LinkContainer to="/Resume">
        <Nav.Item>
            <Nav.Link>Resume</Nav.Link>
        </Nav.Item>
    </LinkContainer>
  </Nav>

    )
}

export default Aboutme