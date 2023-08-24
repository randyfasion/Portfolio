import React from 'react'
//import bootstrap
import{ Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Projects from './pages/Projects'
// import {BrowseRouter as Router, Route , Switch, Link } from "react-router-dom";  
import { LinkContainer } from 'react-router-bootstrap'
import '../App.css';

// const styles = {
//     NavStyle: {
//       // background: 'red',
//       fontSize: '50px',
//       textDecoration: 'none !important',
//       color: 'black'
//     }
// };


const Aboutme = () => {
    return (
        <Nav className="header bg-light " id="top" fill variant="" defaultActiveKey="/Aboutme">
    <LinkContainer to="/Aboutme">
        
        <Nav.Item>
            <Nav.Link className="toplink" href="/Aboutme">About Me</Nav.Link>
        </Nav.Item>
    </LinkContainer>

    <LinkContainer to="/Projects">
        <Nav.Item>
            <Nav.Link href="/Projects">Projects</Nav.Link>
        </Nav.Item>
    </LinkContainer>

    <LinkContainer to="/contactme">
        <Nav.Item>
            <Nav.Link href="/Contactme">Contact Me</Nav.Link>
        </Nav.Item>
    </LinkContainer>



        <Nav.Item>
        <a className="nav-link" href="https://docs.google.com/document/d/1t-uuGnEDmKXvGTaHLOzOef3Qdxx4ewMrSR9E35oUn-M/edit?usp=sharing">
       Resume</a>

        </Nav.Item>


  </Nav>
       

    )
}

export default Aboutme