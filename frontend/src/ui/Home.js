import React from "react"
import {Container, Row, Col, Button} from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import AC from "./images/AC.jpg"
import WT from "./images/WT.png"
import "./Home.css"



export function Home() {
    return (
        <>
            <Container fluid id="landing">
                <Container className="landing-text text-center">
                        <h1 className="m-4 p-4">Amarillo</h1>
                        <h2 className="m-4 p-4">Tech Hub</h2>
                        <Button className="m-5" variant="light">Profiles</Button>
                        <Button className="m-5" variant="light">Job Listings</Button>
                </Container>
            </Container>


            <div id="about" className="container text-center container-fluid px-5">
                <div className="row">
                    <Container className="col-lg-12 px-5 py-5"></Container>
                    <h1>&bull;Our Mission Statement&bull;</h1>
                    <Row>
                        Our  is to create an online innovative ecosystem where Amarillo
                        residents in the tech industry can connect with employers and each other.
                        Eventually offering recourses as well. From educational opportunities to local
                        networking events.
                    </Row>
                </div>
            </div>


            <div id="portfolio" className="flex-wrap px-5 py-5 mt-5">
                <div className="row">
                    <Container id="AC-section" className="col-lg-6 px-5 py-5 d-flex justify-content-center">
                            <Image id="AC-image" className="rounded-circle align-items-center shadow p-3 mb-5"
                            src={AC} alt="AC"/>
                    </Container>
                    <Container id="AC-text" className="col-xl-6 pt-5 text-center align-content-center">
                        <Row className="text1 pt-5 mt-5">
                            The CIS - Coding and Design Certificate prepares students for entry level positions in
                            a variety of IT industries. Students will learn the following: design and coding of full web
                            applications and apps for mobile devices: support of database systems; computer support
                            tasks such as replacing computer parts, maintaining small networks, and maintaining security
                            of computer systems; and creation and maintenance of files using application software.
                        </Row>
                    </Container>
                </div>
            </div>


            <div id="portfolio" className="flex-wrap px-5 py-5 mt-5">
                <div className="row">
                    <Container id="portfolio-text" className="col-xl-6 pt-5 text-center align-content-center">
                        <Row className="text1 pt-5 mt-5">
                            The WT CS program offers the breadth and depth of the discipline through courses that cover
                            theory, design, development, and application of computer systems. The CS program at WT focuses
                            on preparing the future workforce by providing a strong foundation of existing technologies and
                            paving ways for them to embrace the emerging ones with less difficulty. The rich and diverse
                            discipline prepares students wanting to enter emerging fields of computer science such as
                            software engineering, enterprise systems, mobile computing, artificial intelligence, and so on.
                            Most of our students are successful in finding internship positions during their junior and
                            senior years which develop into full-time jobs upon graduation.
                        </Row>
                    </Container>
                    <Container id="portfolio-image" className="col-lg-6 px-5 py-5 d-flex justify-content-center">
                        <Image id="WT-image" className="rounded-circle align-items-center shadow p-3 mb-5"
                               src={WT} alt="WT"/>
                    </Container>
                </div>
            </div>

        </>

    )
}
