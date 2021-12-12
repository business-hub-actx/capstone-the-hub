import {Button, Modal, Form} from "react-bootstrap";
import React, {useState} from "react"
import * as yup from "yup"
import {httpConfig} from "../utils/httpConfig";
import {Formik} from "formik"
import {FormDebugger} from "./FormDebugger";

export function SignInModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Set default values
    const initialValues = {
        profilePassword: '',
        profileEmail: ''
    }

    // Yup validation
    const validation = yup.object().shape({
        profilePassword: yup.string()
            .required("Profile password is required")
            .min(10, "Password must be at least ten characters"),
        profileEmail: yup.string().email("Please provide a valid email")
            .required("A valid email is required")
    })

    // Sign in route and status
    const handleSubmit = (values, {resetForm, setStatus}) => {
        console.log(`%c${values}`,"font-weight: bold; color: lime; font-size: 28px")
        httpConfig.post("/apis/sign-in/", values)
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

    // Sign in modal
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Login
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validation}>
                        {SignInFormContent}
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

// Props object
function SignInFormContent(props) {
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

    // Sign in form
    return (
        <>
            <form onSubmit={handleSubmit} noValidate>
                <Form.Group className="mb-3" controlId="profilePassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={values.profilePassword} type="password" onChange={handleChange}
                                  onBlur={handleBlur} placeholder="Password"/>
                </Form.Group>
                <HandleError errors = {errors} touched = {touched} value = {"profilePassword"}/>

                <Form.Group className="mb-3" controlId="profileEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control value={values.profileEmail} type="email" onChange={handleChange}
                                  onBlur={handleBlur} placeholder="Enter email"/>
                </Form.Group>
                <HandleError errors = {errors} touched = {touched} value = {"profileEmail"}/>
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

// error alert
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
