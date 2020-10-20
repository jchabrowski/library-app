import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Col, Button, Toast } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { handlePost } from '../../api/book.api'

const AddBookForm = () => {
  const [showToast, setShowToast] = useState(false);

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
    handlePost(values.title, values.author, values.pages, values.rating);
    setShowToast(true);
  };

  return(
    <Formik 
      initialValues={{
      title: '',
      author: '',
      pages: '',
      rating: '',
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
              placeholder="Lord of The Rings: Return of the King" 
              value={values.title}
              onChange={handleChange}              
            />
            {errors.title && touched.title && errors.title}
          </Form.Group>

          <Form.Group as={Col} md={4}>
            <Form.Control
              type="text"
              name="author"
              placeholder="J.R.R. Tolkien" 
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

        <Button variant="primary" type="submit" className="mx-1 my-1" onClick={handleSubmit}>Submit</Button>
        <Link to="/">
          <Button variant="outline-secondary" className="mx-1 my-2">Go Back</Button>
        </Link>

        <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide className="my-3 Toast">
          <Toast.Header>
            <strong className="mr-auto">Great!</strong>
          </Toast.Header>
          <Toast.Body>You just added {values.title} by {values.author}!</Toast.Body>
        </Toast>

      </Form>
      )}
    </Formik>
  )
}

export default AddBookForm