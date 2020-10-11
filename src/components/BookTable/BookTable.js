import React, { useContext, useState } from 'react';
import { Table, Modal, Button } from 'react-bootstrap';
import GearImage from '../assets/icons/gear';
import { handleDelete } from '../api/book.api';
import WasteImage from '../assets/icons/waste';
import BookContext from '../api/bookContext';
// import updateBooks from '../Home/Home';
// import Axios from 'axios';



const BookTable = (props) => {
  const books = useContext(BookContext);

  function showOptionsModal() {
    
  }

  const [currentBookId, setCurrentBookId] = useState();
  const [currentBookTitle, setCurrentBookTitle] = useState();
  const [currentBookAuthor, setCurrentBookAuthor] = useState();

  //Modal functions. Showing, closing
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  //shows delete modal, creates current info about book id, title and author
  function showDeleteBookModal(currentBookTitle, currentBookAuthor, currentBookId) {
    setCurrentBookTitle(currentBookTitle)
    setCurrentBookAuthor(currentBookAuthor)
    setCurrentBookId(currentBookId)
    handleShow()
  }

  

  //closes delete modal, uses currentId to delete book from api
  function handleDeleteBook(currentBookId) {
    handleDelete(currentBookId)
    .then(handleClose())
      .then(props.updateBooks)
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
                <td align="center" onClick={showOptionsModal}><GearImage /></td>
                <td align="center" onClick={() => showDeleteBookModal(book.title, book.author, book.id)}><WasteImage /></td>
              </tr>
            </>)
          }
      </tbody>
    </Table>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton >
        <Modal.Title>Warning</Modal.Title>
      </Modal.Header>
  
      <Modal.Body>Do you want to delete {currentBookTitle} by {currentBookAuthor}?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>Cancel</Button>
        <Button variant="danger" onClick={() => handleDeleteBook(currentBookId)}>Delete</Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default BookTable
