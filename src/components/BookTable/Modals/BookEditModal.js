import React, { useState } from 'react';
import { Modal, Form, Col, Button, Toast } from 'react-bootstrap';
import { Formik } from 'formik';
import { handleBookEdit } from '../../../api/book.api';
import GearImage from "../../../icons/gear";
import SignupSchema from '../../AddBook/SignupSchema';

const BookEditModal = (props) => {

  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSuccess = (values) => {
    handleBookEdit(
      values.title, 
      values.author, 
      values.id, 
      values.pages, 
      values.rating
      ).then(setShowToast(true))
        .then(setShow(false))
          .then(props.updateBooks)
  };

  return (
    <>
      <Button variant="link" onClick={handleShow}>
        <GearImage />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton >
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you want to edit {props.book.title} by {props.book.author}?
        </Modal.Body>
        <Modal.Body>
          <Formik 
            initialValues={{
              title: `${props.book.title}`,
              author: `${props.book.author}`,
              pages: `${props.book.pages}`,
              rating: `${props.book.rating}`,
              id: `${props.book.id}`,
            }}
            validationSchema={SignupSchema}
            onSubmit={values => onSuccess(values)}
          >

            {({ values, errors, touched, handleChange, handleSubmit })  => (
              <Form noValidate>
                <Form.Row>
                  <Form.Group as={Col} md={6}>
                    <Form.Control 
                      type="text"
                      name="title" 
                      value={values.title}
                      onChange={handleChange}              
                    />
                    {errors.title && touched.title && errors.title}
                  </Form.Group>

                  <Form.Group as={Col} md={4}>
                    <Form.Control
                      type="text"
                      name="author"
                      value={values.author}
                      onChange={handleChange}
                    />
                    {errors.author && touched.author && errors.author}
                  </Form.Group>
                  
                
                  <Form.Group as={Col} md={4}>
                    <Form.Control
                      type="number"
                      name="pages" 
                      value={values.pages}
                      onChange={handleChange}
                    />
                    {errors.pages && touched.pages && errors.pages}
                  </Form.Group>

                  
                  <Form.Group as={Col} md={4}>
                    <Form.Control
                      name="rating"
                      value={values.rating}
                      onChange={handleChange}
                    />
                    {errors.rating && touched.rating && errors.rating}
                  </Form.Group>
                </Form.Row>

                <Button variant="secondary" onClick={() => handleClose()}>
                    Cancel
                </Button>
                <Button 
                  variant="primary" 
                  className="ml-2"
                  onClick={handleSubmit}
                >
                  Update
                </Button>
              </Form >
            )}
          </Formik> 
        </Modal.Body>

        <Modal.Footer>
          <Toast 
            onClose={() => setShowToast(false)} 
            show={showToast} delay={3000} 
            autohide 
            className="my-3 Toast"
          >
            <Toast.Header>
              <strong className="mr-auto">Great!</strong>
            </Toast.Header>
            <Toast.Body>Edition ended successfully!</Toast.Body>
          </Toast>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default BookEditModal;