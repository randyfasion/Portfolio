import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'




const Contactme = () => {
    return (
        <>
<Container fluid className="aboutmecontainer2 ">
    <Container className="p-5">
        <Row>
            <Col>
                <h1 className="projecttitle">For more information...</h1>

            </Col>
        </Row>
    </Container>
</Container>

<Container fluid className=" bg-light contactmecontainer">
    <Container className="p-5">
        <Row className="contactinfo">
            <Col>
                <h2 className="info">Contact Me </h2>
                <Card className="cardinfo"  style={{width: '18rem'}}>
                    <Row>
                        
                <p >
                    
                   Phone Number: <a className="links" href="tel:8048334359">8043060146 </a><br></br>
                    GitHub: <a className="links" href="https://github.com/randyfasion">RandyFasion</a><br></br>
                    LinkedIn: <a className="links" href="https://www.linkedin.com/in/randy-faison-47ab58183/">RandyFaison</a><br></br>   
                    Email: <a  className="links" href="mailto:randyfaison@gmail.com">RandyFaison@gmail.com </a><br></br>
                    
                </p>
                </Row>
                </Card>

            </Col>
        </Row>
    </Container>
</Container>
</>
    )
}

export default Contactme
