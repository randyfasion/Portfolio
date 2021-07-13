import React from 'react'
//import bootstrap
import{ Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


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
    <Nav.Item>
      <Nav.Link className="links"  href="/home">About Me</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Contact Me</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Projects</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-3">Resume</Nav.Link>
    </Nav.Item>
  </Nav>

    )
}

export default Aboutme