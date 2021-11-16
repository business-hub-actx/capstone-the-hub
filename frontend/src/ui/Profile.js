import React from "react"
import profileHeader from "../images/profile01.webp"
import {Container, Image, Row, Form, Col, Card, FormControl} from "react-bootstrap";
import "./profilePage.css"
import {ProfileCard} from "./share/components/ProfileCard";

export const Profile = () => {
    return (
        <>
            <Container fluid className="proHeader">
                {/*<Image src={profileHeader} className="proImage" alt="Here's Johnny!"/>*/}

                    <Row className="d-flex justify-content-center">
                        <Col sm={6}>
                    <h1 className="proTitle text-center px-2 m-5 border border-2 border-dark">
                        AMARILLO TECH PROFILES
                    </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <Form className="searchInput m-4">
                                <FormControl
                                    type="Search"
                                    placeholder="Search"
                                    className="rounded-pill"
                                    aria-label="Search"
                                />
                            </Form>
                        </Col>
                        <Col sm={6}>
                            <Form.Select className="filterInput m-4">
                                <option value="1">Filter</option>
                                <option value="2">Full-Time</option>
                                <option value="3">Part-Time</option>
                                <option value="4">Freelance</option>
                                <option value="5">Remote</option>
                            </Form.Select>
                        </Col>
                    </Row>
                </Container>


            {/* PROFILE LISTINGS*/}
            {/*<Container className=" proList bg-light border border-2">*/}
            {/*    <Col className="d-block align-items-center">*/}
            {/*        <ProfileCard/>*/}
            {/*        <ProfileCard/>*/}
            {/*        <ProfileCard/>*/}
            {/*        <ProfileCard/>*/}
            {/*        <ProfileCard/>*/}
            {/*        <ProfileCard/>*/}
            {/*        <ProfileCard/>*/}
            {/*    </Col>*/}
            {/*</Container>*/}
        </>
    )
}

let navPage = 1