import React from "react"
import "./profilePage.css"
import {Container, Row, Form, Col, FormControl} from "react-bootstrap";
import {ProfileCard} from "./share/components/ProfileCard";

export const Profile = () => {
    return (
        <>
            <Container fluid className="proHeader">
                <Row className="d-flex justify-content-center">
                    <Col lg={6} sm={6} className="m-5">
                        <h1 className="proTitle text-center px-2 m-5 border border-2 border-dark">
                            AMARILLO TECH PROFILES
                        </h1>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col lg={3} md={3} sm={4} xs={5} className="mt-lg-5">
                        <Form className="searchInput m-3">
                            <FormControl
                                type="Search"
                                placeholder="Search"
                                className="rounded-pill"
                                aria-label="Search"
                            />
                        </Form>
                    </Col>
                    <Col lg={3} md={3} sm={4} xs={5} className="mt-lg-5">
                        <Form.Select className="filterInput m-3">
                            <option>Filters</option>
                            <option value="1">Full-Time</option>
                            <option value="2">Part-Time</option>
                            <option value="3">Freelance</option>
                            <option value="4">Remote</option>
                        </Form.Select>
                    </Col>
                </Row>
            </Container>




            {/*PROFILE LISTINGS*/}
            <Container className="proList bg-light border border-2">
                <Col className="proCol d-block align-items-center">
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                </Col>
            </Container>
        </>
    )
}

