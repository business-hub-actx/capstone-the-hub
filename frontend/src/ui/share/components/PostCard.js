import React from "react"
import {Card, Row, Col} from "react-bootstrap";
import smLogoPic from "../../images/port1.webp"


export function PostCard({post}) {
    return (
        <>
            <Card className="my-2">
                <Row>
                    <Col lg={1} xs={3} className="p-1">
                        <Card.Img fluid src={post.postLogo} className="proPic ms-2" alt="Company Logo"/>
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Text>
                                {post.postDescription}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </>
    )
}