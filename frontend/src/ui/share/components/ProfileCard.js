import React from "react"
import {Card} from "react-bootstrap";

export function ProfileCard() {
    return (
        <>
            <Card className="my-2">
                <Card.Body>
                    <Card.Text>
                        I'm a ProfileCard Component
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}