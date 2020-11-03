import React, { } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../../styles/toast.style.css';
import AddBookForm from './AddBookForm';

const AddBook = () => {
  return (
    <>
      <Row className="justify-content-center py-5 mx-auto">
        <Col xs={12} s={8} m={6} l={6} lg={6}>
          <AddBookForm />
        </Col>
      </Row>
    </>
  );
};

export default AddBook;