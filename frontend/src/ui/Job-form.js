import React from "react";
import {Container, Row, Col, Card,} from "react-bootstrap";
import "./job-form.css"

export function JobForm() {
    return(
        <>
            <div className="main">
                <Container id="page-intro">
                    <header className="text-center">
                        <h1 className="entry-title flexible-h1">Post a Job</h1>
                        <ul id="job-steps">
                            <li className="step-job active"><em>1</em> <span>Job Details</span></li>
                            <li className="step-preview"><em>2</em> <span>Preview</span></li>
                        </ul>
                    </header>
                </Container>

            </div>
        </>

    )
}