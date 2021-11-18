import React from "react"
import {Card, Row, Col} from "react-bootstrap";
import smProfilePic from "../../images/port1.webp"


export function ProfileCard() {
    return (
        <>
            <Card className="my-2">
                <Row>
                    <Col lg={1} xs={3} className="p-1">
                        <Card.Img fluid src={smProfilePic} className="proPic ms-2" alt="Profile Portrait"/>
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Text>
                                You enjoyed that. A surprise party? Mr. Worf, I hate surprise parties. I would *never*
                                do that to you. This is not about revenge. This is about justice. I'd like to think that
                                I haven't changed those things, sir.
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </>
    )
}