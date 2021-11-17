import React from "react";
import {Container, Image, Row, Col, Card} from "react-bootstrap";
import jobListingsHeader from "./images/working.jpg"
import "./job-listings.css"

export function JobListings() {
    return(
        <>
            <Container>
                <Row>
                    <Col>

                    </Col>
                </Row>
            </Container>

            <Container className="header">
                <Row>
                    <Col xs={6} md={4}>
                        <Image src={jobListingsHeader} alt=""/>
                    </Col>
                </Row>    
            </Container>
            <Container>
                <Row>
                    <Col className="card px-lg-5">
                        <Card className="card py-5">
                            <Card.Body>This is some text within a card body.</Card.Body>
                        </Card>
                        <Card className="card py-5">
                            <Card.Body>This is some text within a card body.</Card.Body>
                        </Card>
                        <Card className="card py-5">
                            <Card.Body>This is some text within a card body.</Card.Body>
                        </Card>
                        <Card className="card py-5">
                            <Card.Body>This is some text within a card body.</Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}