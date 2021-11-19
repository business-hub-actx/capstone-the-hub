import React from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import "./job-form.css"

export function JobForm() {
    return (
        <>
            <div className="main">
                <Container id="page-intro">
                    <h1 className="post-a-job">Post a Job</h1>
                    <h2 className="job-details">Job Details</h2>
                </Container>
                <Container id="Form">
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formCompanyName">
                                <Form.Label>Company Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Company Name"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formJobTitle">
                                <Form.Label>Job Title</Form.Label>
                                <Form.Control type="Job Title" placeholder="Job Title"/>
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formJobDescription">
                            <Form.Label>Job Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Job Description"
                                style={{height: '200px'}}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formHowToApply">
                            <Form.Label>How to apply</Form.Label>
                            <Form.Control placeholder="Enter and address or website URL"/>
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridLocation">
                                <Form.Label>Location</Form.Label>
                                <Form.Control placeholder="Enter Job Location"></Form.Control>
                                <Form.Group className="mb-3 mt-0" id="formGridRemote">
                                    <Form.Check type="checkbox" label="Remote"/>
                                </Form.Group>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formEmploymentType">
                                <Form.Label>Employment Type</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Full-Time</option>
                                    <option>Part-Time</option>
                                    <option>Internship</option>
                                    <option>Freelance</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formJobCategory">
                                <Form.Label>Job Category</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>IT</option>
                                    <option>Full-Stack</option>
                                    <option>Back-End</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>

                        <div className="upload-logo">
                            <div className="upload-logo-prepend">
                                <span className="upload-logo-text"
                                      id="upload-logoFileAddon01">Upload Company Logo</span>
                            </div>
                            <div className="custom-file">
                                <input
                                    type="file"
                                    className="custom-file-input"
                                    id="inputGroupFile01"
                                    aria-describedby="inputGroupFileAddon01"
                                />
                                <label className="custom-file-label" htmlFor="inputGroupFile01">
                                    Choose file
                                </label>
                            </div>
                        </div>

                        <Button className="submit" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>

            </div>
        </>

    )
}