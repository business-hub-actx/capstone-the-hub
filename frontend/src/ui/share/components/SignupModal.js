import {Button, Modal, Form} from "react-bootstrap";
import React, {useState} from "react"
import * as yup from "yup"
import {httpConfig} from "../utils/httpConfig";
import {Formik} from "formik"
import {FormDebugger} from "./FormDebugger";

export function SignupModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const initialValues = {
        profileEmail: '',
        profilePassword: '',
        profileName: '',
        profilePasswordConfirm: '',
        profileUrl: '',
        profileJobTitle: '',
        profileSkills: '',
        profileAboutMe: ''
    }

    const validation = yup.object().shape({
        profilePassword: yup.string()
            .required("Profile password is required")
            .min(10, "Password must be at least ten characters"),
        profilePasswordConfirm: yup.string()
            .required("Profile password is required")
            .min(10, "Password must be at least ten characters"),
        profileEmail: yup.string().email("Please provide a valid email")
            .required("A valid email is required"),
        profileName: yup.string()
            .required("Please provide a name").max(128, "Name must be less than one hundred twenty eight characters"),
        profileJobTitle: yup.string()
            .required("Please provide a job title ").max(128, "Job title must be less than one hundred twenty eight characters"),
        profileSkills: yup.string()
            .required("Please provide a list of your skills").max(255, "Must be under two hundred fifty five characters"),
        profileAboutMe: yup.string()
            .required("Bio is required").max(255, "Must be under two hundred fifty five characters"),
        profileUrl: yup.string()
            .required("Please provide a valid url").max(128, "URL must be less than one hundred twenty eight characters")
    })

    const handleSubmit = (values, {resetForm, setStatus}) => {
        console.log(values)
        httpConfig.post("/apis/sign-up/", values)
            .then(reply => {
                let {
                    message,
                    type,
                    status
                } = reply
                if (status === 200) {
                    resetForm()
                }
                setStatus({
                    message,
                    type
                })
            })
    }

    return (
        <>
            <Button className="p-2" variant="outline-secondary" onClick={handleShow}>
                Sign up
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Signup form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validation}>
                        {SignupFormContent}
                    </Formik>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

function SignupFormContent(props) {
    const {
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props

    return (
        <>
        <form onSubmit={handleSubmit} noValidate>
            <Form.Group className="mb-3" controlId="profileEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control value={values.profileEmail} type="email" onChange={handleChange}
                              onBlur={handleBlur} placeholder="Enter email"/>
            </Form.Group>
             <HandleError errors = {errors} touched = {touched} value = {"profileEmail"}/>

            <Form.Group className="mb-3" controlId="profilePassword">
                <Form.Label>Password</Form.Label>
                <Form.Control value={values.profilePassword} type="password" onChange={handleChange}
                              onBlur={handleBlur} placeholder="Password"/>
            </Form.Group>
            <HandleError errors = {errors} touched = {touched} value = {"profilePassword"}/>

            <Form.Group className="mb-3" controlId="profilePasswordConfirm">
                <Form.Label>Password Confirm</Form.Label>
                <Form.Control value={values.profilePasswordConfirm} type="password" onChange={handleChange}
                              onBlur={handleBlur} placeholder="Password"/>
            </Form.Group>
            <HandleError errors = {errors} touched = {touched} value = {"profilePasswordConfirm"}/>

            <Form.Group className="mb-3" controlId="profileName">
                <Form.Label>Name</Form.Label>
                <Form.Control value={values.profileName} type="text" onChange={handleChange}
                              onBlur={handleBlur} placeholder="John Smith"/>
            </Form.Group>
            <HandleError errors = {errors} touched = {touched} value = {"profileName"}/>

            <Form.Group className="mb-3" controlId="profileJobTitle">
                <Form.Label>Job Title</Form.Label>
                <Form.Control value={values.profileJobTitle} type="text" onChange={handleChange}
                              onBlur={handleBlur} placeholder="Fullstack Developer"/>
            </Form.Group>
            <HandleError errors = {errors} touched = {touched} value = {"profileJobTitle"}/>

            <Form.Group className="mb-3" controlId="profileUrl">
                <Form.Label>Url</Form.Label>
                <Form.Control value={values.profileUrl} type="url" onChange={handleChange}
                              onBlur={handleBlur} placeholder="Awesome portfolio"/>
            </Form.Group>
            <HandleError errors = {errors} touched = {touched} value = {"profileUrl"}/>

            <Form.Group className="mb-3" controlId="profileSkills">
                <Form.Label>Skills</Form.Label>
                <Form.Control value={values.profileSkills} type="text" onChange={handleChange}
                              onBlur={handleBlur} placeholder="Languages and frameworks"/>
            </Form.Group>
            <HandleError errors = {errors} touched = {touched} value = {"profileSkills"}/>

            <Form.Group className="mb-3" controlId="profileAboutMe">
                <Form.Label>AboutMe</Form.Label>
                <Form.Control value={values.profileAboutMe} type="text" onChange={handleChange}
                              onBlur={handleBlur} placeholder="Bio"/>
            </Form.Group>
            <HandleError errors = {errors} touched = {touched} value = {"profileAboutMe"}/>

            <button className={"btn btn-primary"} onClick={handleSubmit} type="submit">
                submit
            </button>
        </form>
    {status && (
        <>
            <div className={status.type}>{status.message}</div>
        </>
    )}
            <FormDebugger {...props}/>
        </>
    )
}

function HandleError(props) {
    const {value, errors, touched} = props
    return (
        <>
            {errors[value] && touched[value] && (
            <div className="alert alert-danger">
                {errors[value]}
            </div>
            )}
        </>
    )
}

