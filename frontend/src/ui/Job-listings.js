import React, {useEffect, useState} from "react";
import {Container, Row, Col, Form, FormControl, Dropdown} from "react-bootstrap";
import "./job-listings.css"



import {useDispatch, useSelector} from "react-redux";
import {fetchPostsForJobListing} from "../store/post";

import {PostCard} from "./share/components/PostCard";
import {fetchPostTagByPostTagTagId, fetchPostTagsByPrimaryKey} from "../store/postTag";
import {fetchAllTags} from "../store/tag";


export function JobListings() {

    const [postTagTagId, setPostTagTagId] = useState(null)
    const posts = useSelector( state => state.post ? state.post : []);
    const tags = useSelector(state => state.tag ? state.tag : []);
    const postTags = useSelector(state => state.postTag ? state.postTag : []);
    const dispatch = useDispatch();
    const effects = () => {
        dispatch(fetchPostsForJobListing());
        dispatch(fetchAllTags());
        // dispatch(fetchPostTagsByPrimaryKey(postTagPostId, postTagTagId))
    };
    const inputs = [dispatch, postTagTagId]

    useEffect(effects, inputs);

    const filteredPosts = posts.filter(post => post.postId === postTags.find(postTag => postTag.postTagPostId === post.postId))
    console.log(filteredPosts)


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
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {tags.map(tag =>  <Dropdown.Item value=""
                                    onClick={() => {
                                        dispatch(fetchPostTagByPostTagTagId(tag.tagId))}}>{tag.tagName}</Dropdown.Item>)}
                            </Dropdown.Menu>
                        </Dropdown>
                </Row>
            </Container>



            {/*JOB POST LISTINGS*/}
            <Container className="jobList bg-light border border-2">
                <Col className="jobCol d-block align-items-center">
                    {posts.map(post => <PostCard post={post} key={post.postId}/>)}
                </Col>
            </Container>
        </>
    )
}
