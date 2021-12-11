import React from "react";
import {Container, Row, Col, Form, FormControl} from "react-bootstrap";
import "./job-listings.css"
import {PostCard} from "./share/components/PostCard";

export function JobListings() {
    return (
        <>
            <Container fluid className="jobHeader">
                <Row className="d-flex justify-content-center">
                    <Col lg={6} sm={6} className="m-5">
                        <h1 className="jobTitle text-center px-2 m-5 border border-2 border-dark">
                            AMARILLO JOB LISTINGS
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

            {/*JOB POST LISTINGS*/}
            <Container className="jobList bg-light border border-2">
                <Col className="jobCol d-block align-items-center">
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                </Col>
            </Container>
        </>
    )
}
