import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'

const Contactme = () => {
    return (
        <>
<Container fluid className="aboutmecontainer2 ">
    <Container className="p-5">
        <Row>
            <Col>
                <h1 className="projecttitle">Reach Out</h1>

            </Col>
        </Row>
    </Container>
</Container>

<Container fluid className=" bg-light contactmecontainer">
    <Container className="p-5">
        <Row className="contactinfo">
            <Col>
                <h2 className="info">Contact Information </h2>
                <Card className="cardinfo"  style={{width: '18rem'}}>
                    <Row>
                        
                <p>
                    Phone Number: 8048334359 <br></br>
                    GitHub: RandyFasion <br></br>
                    LinkedIn: RandyFaison<br></br>
                    Email: RandyFaison@gmail.com <br></br>
                    
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
