import React from "react"
import {Card} from "react-bootstrap";
// import {smProfilePic} from "../port1.webp"


export function ProfileCard() {
    return (
        <>
            <Card className="my-2">
                {/* <Card.Img src={smProfilePic} className="proPic" alt="Profile Portrait"/>*/}
                <Card.Body>
                    <Card.Text>
                        I'm a ProfileCard Component
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}