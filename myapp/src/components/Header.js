import React from 'react'
//import bootstrap
import{ Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Projects from './pages/Projects'
// import {BrowseRouter as Router, Route , Switch, Link } from "react-router-dom";  


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
    <LinkContainer>
        <Nav.Item>
            <Nav.Link className="links"  href="/home">About Me</Nav.Link>
        </Nav.Item>
    </LinkContainer>

    <LinkContainer>
        <Nav.Item>
            <Nav.Link eventKey="link-1">Contact Me</Nav.Link>
        </Nav.Item>
    </LinkContainer>

    <LinkContainer>
        <Nav.Item>
            <Nav.Link eventKey="/Projects">Projects</Nav.Link>
        </Nav.Item>
    </LinkContainer>

    <LinkContainer>
        <Nav.Item>
            <Nav.Link eventKey="link-3">Resume</Nav.Link>
        </Nav.Item>
    </LinkContainer>
  </Nav>

    )
}

export default Aboutme