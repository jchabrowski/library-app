import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Form, Toast } from "react-bootstrap";
import { Formik } from "formik";
import { handlePost } from "../../api/book.api";
import SignupSchema from "./SignupSchema";
import { ToastContext } from "../ToastContextWrapper";

const AddBookForm = () => {
  const [showToast, setShowToast] = useState(false);
  const toastContext = useContext(ToastContext);

  const onSuccess = (values) => {
    handlePost(values.title, values.author, values.pages, values.rating).then(
      () => {
        toastContext.setMessage(
          `You just added ${values.title} by ${values.author}!`
        );
        toastContext.setShow(true);
      }
    );
  };

  return (
    <Formik
      initialValues={{
        title: "",
        author: "",
        pages: "",
        rating: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => onSuccess(values)}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => (
        <Form noValidate>
          <Form.Row>
            <Form.Group as={Col} md={6}>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter book title.."
                value={values.title}
                onChange={handleChange}
              />
              {errors.title && touched.title && errors.title}
            </Form.Group>

            <Form.Group as={Col} md={4}>
              <Form.Control
                type="text"
                name="author"
                placeholder="Enter author.."
                value={values.author}
                onChange={handleChange}
              />
              {errors.author && touched.author && errors.author}
            </Form.Group>

            <Form.Group as={Col} md={4}>
              <Form.Control
                type="number"
                name="pages"
                placeholder="Number of pages"
                value={values.pages}
                onChange={handleChange}
              />
              {errors.pages && touched.pages && errors.pages}
            </Form.Group>

            <Form.Group as={Col} md={4}>
              <Form.Control
                name="rating"
                placeholder="Rating on a scale 1-5"
                value={values.rating}
                onChange={handleChange}
              />
              {errors.rating && touched.rating && errors.rating}
            </Form.Group>
          </Form.Row>

          <Button
            variant="primary"
            type="submit"
            className="mx-1 my-1"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Link to="/">
            <Button variant="outline-secondary" className="mx-1 my-2">
              Go Back
            </Button>
          </Link>
          <Button variant="primary" type="button">
            Test
          </Button>

          <Toast
            onClose={() => setShowToast(false)}
            show={showToast}
            delay={3000}
            autohide
            className="my-3 Toast"
          >
            <Toast.Header>
              <strong className="mr-auto">Great!</strong>
            </Toast.Header>
            <Toast.Body>
              You just added {values.title} by {values.author}!
            </Toast.Body>
          </Toast>
        </Form>
      )}
    </Formik>
  );
};

export default AddBookForm;
