import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Form, Toast } from 'react-bootstrap';
import { handlePost } from '../api/book.api';

const AddBook = () => {

  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [pages, setPages] = useState();
  const [rating, setRating] = useState();


  const handleSubmit = (title, author, pages, rating) => {
    handlePost(title, author, pages, rating);
    setShowToast(true);
  }

  //toggling toast messages
  const [showToast, setShowToast] = useState(false);
  // const handleShowToast = () => setShowToast(true);

  return (
    <React.Fragment>
      <Row className="justify-content-center py-5 mx-auto">
        <Col xs={12} s={8} m={6} l={6} lg={6}>
          <Form>
            <Form.Row>
              <Form.Group as={Col} md={6}>
                <Form.Label>Title</Form.Label>
                <Form.Control 
                  type="text"
                  placeholder="Lord of The Rings: Return of the King" 
                  name="bookTitle"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} md={4}>
                <Form.Label>Author</Form.Label>
                <Form.Control 
                  type="text"
                  placeholder="J.R.R. Tolkien" 
                  name="bookAuthor"
                  value={author}
                  onChange={e => setAuthor(e.target.value)}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md={4}>
                <Form.Label>Pages</Form.Label>
                <Form.Control 
                  type="number"
                  placeholder="Number of pages" 
                  name="bookPages"
                  value={pages}
                  onChange={e => setPages(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} md={4}>
                <Form.Label>Rating</Form.Label>
                <Form.Control 
                  type="number"
                  placeholder="Rating on a scale 1-5" 
                  name="bookRating"
                  value={rating}
                  onChange={e => setRating(e.target.value)}
                />
              </Form.Group>
            </Form.Row>
          </Form>

          <Button variant="primary" className="mx-1 my-1" onClick={() => handleSubmit(title, author, pages, rating)}>Submit</Button>
          <Link to="/">
            <Button variant="outline-secondary" className="mx-1 my-2">Go Back</Button>
          </Link>

          <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide className="my-3">
            <Toast.Header>
              <strong className="mr-auto">Great!</strong>
            </Toast.Header>
            <Toast.Body>You just added {title} by {author}!</Toast.Body>
          </Toast>

        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AddBook;