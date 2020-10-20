import React, { useState } from 'react';
import { Modal, Form, Col, Button, Toast } from 'react-bootstrap';
import { Formik }from 'formik';
import * as Yup from 'yup';
import { handleBookEdit } from '../../../api/book.api'

const BookEditModal = (props, currentTitle, currentAuthor, currentId, currentPages, currentRating) => {

  //Edit Modal toggle. Showing, closing
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  // const handleShowEdit = () => setShowEdit(true);

  //Edit Toast message Toggle
  const [showToast, setShowToast] = useState(false);
  // const handleShowToast = () => setShowToast(true);

  const SignupSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Required'),
    author: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    pages: Yup.number()
      .integer()
      .min(1, 'Not enough pages')
      .max(999, '999 pages maximum!')
      .required('Required'),
    rating: Yup.number()
      .integer()
      .min(1, 'Rate the book on a scale 1-5')
      .max(5, 'Rate the book on a scale 1-5')
      .required('Required'),
  });

  const onSuccess = (values) => {
    handleBookEdit(values.title, values.author, values.id, values.pages, values.rating)
    .then(setShowToast(true))
  };

  return(
    <Modal show={showEdit} onHide={handleCloseEdit}>
      <Modal.Header closeButton >
        <Modal.Title>Warning</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do you want to edit {currentTitle} by an {currentAuthor}?</Modal.Body>
      <Modal.Body>
        <Formik 
          initialValues={{
          title: `${currentTitle}`,
          author: `${currentAuthor}`,
          pages: `${currentPages}`,
          rating: `${currentRating}`,
          id: `${currentId}`,
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

            <Button variant="secondary" onClick={() => handleCloseEdit()}>
                Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
                Update
            </Button>
          </Form >
          )}
        </Formik> 
      </Modal.Body>

      <Modal.Footer>
        <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide className="my-3 Toast">
        <Toast.Header>
          <strong className="mr-auto">Great!</strong>
        </Toast.Header>
        <Toast.Body>Edition ended successfully!</Toast.Body>
        </Toast>
      </Modal.Footer>
    </Modal>
    
  )
}
export default BookEditModal