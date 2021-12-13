import React from "react"
import {Card, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

export function ProfileCard({profile}) {
    return (
        <>
            <Card className="my-2">
                <Row>
                    <Col lg={1} xs={3} className="p-1">
                        <Card.Img fluid src={profile.profilePhoto} className="proPic ms-3 mt-3" alt="Profile Portrait"/>
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Text>
                                <Row>
                                    <Col>
                                        {profile.profileName} <br/>
                                        {profile.profileJobTitle} <br/>
                                        {profile.profileSkills} <br/>
                                        {profile.profileAboutMe} <br/>
                                    </Col>
                                    <Col>
                                        <Link to="profile.profileEmail">{profile.profileEmail}</Link> <br/>
                                        <Link to="profile.profileUrl">{profile.profileUrl}</Link>
                                        <Link to="profile.profileResume">{profile.profileResume}</Link>
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </>
    )
}