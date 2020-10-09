import React, { useContext, useState } from 'react';
import { Table, Modal, Button } from 'react-bootstrap';
import GearImage from '../assets/icons/gear';
import WasteImage from '../assets/icons/waste';
import BookContext from '../api/BookContext';
import Axios from 'axios';


const BookTable = () => {
  const books = useContext(BookContext);
  const BaseUrl = 'http://localhost:3010';

  function OptionsModal() {
    
  }

  const [currentId, setCurrentId] = useState();
  const [currentBook, setCurrentBook] = useState();
  const [currentAuthor, setCurrentAuthor] = useState();
  const [updatedBooks, setUpdatedBooks] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true);
  

  //shows delete modal, pcreates current info about book id, title and author
  function DeleteBookModal(bookId, bookTitle, bookAuthor) {
    let currentId = bookId;
    setCurrentId(currentId);
    let currentTitle = bookTitle;
    setCurrentBook(currentTitle);
    let currentAuthor = bookAuthor;
    setCurrentAuthor(currentAuthor);
    handleShow()
  }

  //closes delete modal, uses currentId to delete book from api
  function handleDelete(currentId) {
    handleClose();
    Axios.delete(`${BaseUrl}/book/${currentId}`)
      .then()
      .catch(err => console.error(err))
  }

  return(
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Pages</th>
          <th>Rating</th> 
          <th>Settings</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
          {books.map(book => 
            <> 
              <tr>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.pages}</td>
                <td>{book.rating}</td>
                <td align="center" onClick={OptionsModal}><GearImage /></td>
                <td align="center" onClick={() => DeleteBookModal(book.id, book.title, book.author)}><WasteImage /></td>
              </tr>
            </>)
          }
      </tbody>
    </Table>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton >
        <Modal.Title>Warning</Modal.Title>
      </Modal.Header>
  
      <Modal.Body>Do you want to delete {currentBook} by {currentAuthor}?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
        <Button variant="danger" onClick={() => handleDelete(currentId)}>Delete</Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default BookTable
