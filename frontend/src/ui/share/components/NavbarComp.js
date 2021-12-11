import React from "react"
import {Container, Nav, Navbar, Row, Col} from "react-bootstrap";
import "./navbarComp.css"
import {Link} from "react-router-dom";

export function NavbarComp() {
    console.log(window.innerWidth)
    return (
        <>
            {/* fixed-top */}
            <Navbar className="navBar px-3" expand="lg">
                <Container fluid>
                    <Navbar.Brand className="navBrand" href="/">AmarilloTech</Navbar.Brand>
                    <Navbar.Toggle aria-control="expand-main-nav"/>
                    <Navbar.Collapse id="expand-main-nav">
                        {(window.innerWidth <= 600)
                            ? (
                                <>
                                <Row>
                                    <Col>
                                        <Nav className="ms-auto">
                                            <Nav.Link className="ms-auto">
                                                <Link to="/" className="navLink mx-1">{accountJoin}</Link>
                                                <Link to="/" className="navLink mx-1">{accountLog}</Link>
                                            </Nav.Link>
                                        </Nav>
                                    </Col>
                                    <Col>
                                        <Nav className="">
                                            <Nav.Link className="">
                                                <Link to={pagePath1} className="navLink mobile mx-1">{pageLink1}</Link>
                                                <Link to={pagePath2} className="navLink mobile mx-1">{pageLink2}</Link>
                                            </Nav.Link>
                                        </Nav>
                                </Col>
                                </Row></>
                            )
                            : (
                                <>
                                    <Nav>
                                        <Nav.Link>
                                            <Link to={pagePath1} className="navLink mx-1">{pageLink1}</Link>
                                            <Link to={pagePath2} className="navLink mx-1">{pageLink2}</Link>
                                        </Nav.Link>
                                    </Nav>
                                    <Nav className="ms-auto">
                                        <Nav.Link className="ms-auto">
                                            <Link to="/" className="navLink mx-1">{accountJoin}</Link>
                                            <Link to="/" className="navLink mx-1">{accountLog}</Link>
                                        </Nav.Link>
                                    </Nav></>
                            )
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

let navPage = 1
let accountStatus = false
let accountJoin
let accountLog
let pageLink1
let pagePath1
let pageLink2
let pagePath2

navbarDisplay(window.location.href)

function navbarDisplay(navPage) {
    console.log(navPage);
    switch (navPage) {

        // HOME PAGE
        case 'localhost:3000':
            pageLink1 = "Profiles"
            pagePath1 = "/profiles"
            pageLink2 = "Job Postings"
            pagePath2 = "/job-listings"
            if (accountStatus === true) {
                accountJoin = ""
                accountLog = "Log Off"
            } else {
                accountJoin = "Join"
                accountLog = "Log In"
            }
            break

        // PROFILE PAGE
        case 'localhost:3000/profiles':
            pageLink1 = ""
            pagePath1 = "/"
            pageLink2 = "Job Postings"
            pagePath2 = "/job-listings"
            if (accountStatus === true) {
                accountJoin = "Edit Profile"
                accountLog = "Log Off"
            } else {
                accountJoin = "Join"
                accountLog = "Log In"
            }
            break

        // JOB POSTINGS
        case 'localhost:3000/job-listings':
            pageLink1 = ""
            pagePath1 = "/"
            pageLink2 = "Profiles"
            pagePath2 = "/profiles"
            if (accountStatus === true) {
                accountJoin = "Post Job"
                accountLog = "Log Out"
            } else {
                accountJoin = "Join"
                accountLog = "Log In"
            }
            break

        // CREATE A JOB POST
        case 'localhost:3000/post':
            pageLink1 = ""
            pagePath1 = "/"
            pageLink2 = ""
            pagePath2 = "/"
            accountJoin = ""
            accountLog = ""
            break
    }
}