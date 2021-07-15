import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'

const Contactme = () => {
    return (
        <>
<Container fluid className="  bg-dark aboutmecontainer">
    <Container className="p-5">
        <Row>
            <Col>
                <h1 className="projecttitle">Contact Me</h1>

            </Col>
        </Row>
    </Container>
</Container>

<Container fluid className="  bg-light contactmecontainer">
    <Container className="p-5">
        <Row className="contactinfo">
            <Col>
                <h2 >Contact Information </h2>
                <Card className="cardinfo"  style={{width: '18rem'}}>
                    <Row>
                        
                <p>
                    Phone Number:
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
