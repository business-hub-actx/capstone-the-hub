import React, {useEffect} from "react";
import {Container, Row, Col, Form, FormControl} from "react-bootstrap";
import "./job-listings.css"
import {ProfileCard} from "./ProfileCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPosts} from "../store/post";

export function JobListings() {

    const posts = useSelector( state => state.post ? state.post : []);
    const dispatch = useDispatch();
    const effects = () => {
        dispatch(fetchAllPosts());
    };
    const inputs = [];
    useEffect(effects,inputs);

    return (
        <>
            <Container fluid className="proHeader">
                <Row className="d-flex justify-content-center">
                    <Col lg={6} sm={6} className="m-5">

                        <h1 className="proTitle text-center px-2 m-5 border border-2 border-dark">
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

            {/*PROFILE LISTINGS*/}
            <Container className="proList bg-light border border-2">
                <Col className="proCol d-block align-items-center">
                    {posts.map(post => <PostCard post={post} key={post.postId}/>)}
                </Col>
            </Container>
        </>
    )
}
