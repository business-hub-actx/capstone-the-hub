import React from "react";
import {Card, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export function ProfileCard({profile}) {
    const tags = useSelector(state => {
        const profileTags = state.profileTag.filter(profileTag => profileTag.profileTagPostId === profile.profileId)
        let tags = []

        for(let profileTag of profileTags){
            const tag = state.tag.find(tag => profileTag.profileTagTagId === tag.tagId)
            tags.push(tag)
        }
        return tags
    })

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
                            Tags: {tags.map(tag => <span>{tag.tagName} </span>)}
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </>
    )
}