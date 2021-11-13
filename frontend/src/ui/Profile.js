import React from "react"
import profileHeader from "../images/profile01.webp"
import {Container, Image, Row, Form, Col, Card, FormControl} from "react-bootstrap";
import "./profilePage.css"
import {ProfileCard} from "./share/components/ProfileCard";

export const Profile = () => {
    return (
        <>
            <Card className="proHeaderCard">
                <Card.Img src={profileHeader} className="proHeader" alt="Here's Johnny!"/>
                <Card.ImgOverlay>
                    <Card.Text className="proTitle text-center px-2 mx-5 border border-2 border-dark mt-5">
                        AMARILLO TECH PROFILES
                    </Card.Text>
                    <Row>
                        <Col></Col>
                        <Col>
                            <Form className="searchInput mx-5">
                                <FormControl
                                    type="Search"
                                    placeholder="Search"
                                    className="me-2 rounded-pill"
                                    aria-label="Search"
                                />
                            </Form>
                        </Col>
                        <Col>
                            <Form.Select className="filterInput">
                                <option value="1">Filter</option>
                                <option value="2">Full-Time</option>
                                <option value="3">Part-Time</option>
                                <option value="4">Freelance</option>
                                <option value="5">Remote</option>
                            </Form.Select>
                        </Col>
                        <Col></Col>
                    </Row>
                </Card.ImgOverlay>
            </Card>

            {/* PROFILE LISTINGS*/}
            <Container className=" proList bg-light border border-2">
                <Col className="d-block align-items-center">
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                </Col>
            </Container>
        </>
    )
}