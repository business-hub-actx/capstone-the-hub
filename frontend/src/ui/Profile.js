// import React, {useEffect, useState} from "react"
// import "./profilePage.css"
// import {Container, Row, Form, Col, FormControl} from "react-bootstrap";
// import {ProfileCard} from "./share/components/ProfileCard";
// import {useDispatch, useSelector} from "react-redux";
// import {fetchAllProfiles, fetchProfileByProfileId} from "../store/profile";
// import {fetchProfileTagByProfileTagTagId, fetchProfileTagsByPrimaryKey} from "../store/profileTag";
// import {fetchAllTags} from "../store/tag";
// import {Dropdown} from "bootstrap";
//
// export const Profile = () => {
//     const [profileTagTagId, setProfileTagTagId] = useState(null)
//     const profiles = useSelector( state => state.profile ? state.profile : []);
//     const tags = useSelector(state => state.tag ? state.tag : []);
//     const profileTags = useSelector(state => state.profileTag ? state.profileTag : []);
//     const dispatch = useDispatch();
//     const effects = () => {
//         dispatch(fetchAllProfiles());
//         dispatch(fetchAllTags)
//     };
//     const inputs = [dispatch, profileTagTagId];
//     useEffect(effects,inputs);
//     const filteredProfiles = profiles.filter(profile => profile.profileId === profileTags.find(profileTag => profileTag.profileTagProfileId === profile.profileId))
//     console.log(filteredProfiles)
//
//     return (
//         <>
//             <Container fluid className="proHeader">
//                 <Row className="d-flex justify-content-center">
//                     <Col lg={6} sm={6} className="m-5">
//                         <h1 className="proTitle text-center px-2 m-5 border border-2 border-dark">
//                             AMARILLO TECH PROFILES
//                         </h1>
//                     </Col>
//                 </Row>
//                 <Row className="d-flex justify-content-center">
//                     <Col lg={3} md={3} sm={4} xs={5} className="mt-lg-5">
//                         <Form className="searchInput m-3">
//                             <FormControl
//                                 type="Search"
//                                 placeholder="Search"
//                                 className="rounded-pill"
//                                 aria-label="Search"
//                             />
//                         </Form>
//                     </Col>
//                     {/*<Col lg={3} md={3} sm={4} xs={5} className="mt-lg-5">*/}
//                     <Dropdown>
//                         <Dropdown.Toggle variant="success" id="dropdown-basic">
//                             Dropdown Button
//                         </Dropdown.Toggle>
//                         <Dropdown.Menu>
//                             {tags.map(tag =>  <Dropdown.Item value="" onClick={() => {
//                                 dispatch(fetchProfileTagByProfileTagTagId(tag.tagId))}}>{tag.tagName}</Dropdown.Item>)
//                             }
//                         </Dropdown.Menu>
//                     </Dropdown>
//                 </Row>
//             </Container>
//
//
//
//
//             {/*PROFILE LISTINGS*/}
//             <Container className="proList bg-light border border-2">
//                 <Col className="proCol d-block align-items-center">
//                     {profiles.map(profile => <ProfileCard profile={profile} key={profile.profileId}/>)}
//                 </Col>
//             </Container>
//         </>
//     )
// }
//
