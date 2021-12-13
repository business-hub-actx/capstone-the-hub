import React from "react"
import {Card, Row, Col} from "react-bootstrap";
import {useSelector} from "react-redux";
import postTag from "../../../store/postTag";

export function PostCard({post}) {
    const tags = useSelector(state => {
        const postTags = state.postTag.filter(postTag => postTag.postTagPostId === post.postId)
        let tags = []

        for(let postTag of postTags){
            const tag = state.tag.find(tag => postTag.postTagTagId === tag.tagId)
            tags.push(tag)
        }
        return tags

    })
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
                            Tags: {tags.map(tag => <span>{tag.tagName} </span>)}
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </>
    )
}