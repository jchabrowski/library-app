import React, { useContext, useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { handleDelete } from '../../api/book.api';
import WasteImage from '../../icons/waste';
import BookContext from '../../api/bookContext';
import { Link } from 'react-router-dom';
import '../../styles/toast.style.css';
import BookEditModal from './Modals/BookEditModal';

const BookTable = (props) => {
  const books = useContext(BookContext);

  //Hooks determining the current book
  const [currentBookId, setCurrentBookId] = useState();
  const [currentBookTitle, setCurrentBookTitle] = useState();
  const [currentBookAuthor, setCurrentBookAuthor] = useState();
  const [currentBookPages, setCurrentBookPages] = useState();
  const [currentBookRating, setCurrentBookRating] = useState();

  //Delete Modal toggle. Showing, closing
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShowDelete = () => setShow(true);

  //Toast message toggle
  const [showToast, setShowToast] = useState(false);
  const handleShowToast = () => setShowToast(true);

  //sets current title, author and id, triggered in Delete and Edit Modals
  function setCurrentBook(title, author, id, pages, rating) {
    setCurrentBookTitle(title);
    setCurrentBookAuthor(author);
    setCurrentBookId(id);
    setCurrentBookPages(pages);
    setCurrentBookRating(rating);
  }

  function showDeleteBookModal(title, author, id) {
    setCurrentBook(title, author, id);
    handleShowDelete();
  }

  function handleDeleteBook(currentBookId) {
    handleDelete(currentBookId)
      .then(handleClose())
      .then(props.updateBooks)
      .catch((err) => console.error(err));
    handleShowToast();
  }

  return (
    <React.Fragment>
      <Table responsive striped bordered hover>
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
          {books.map((book) => ( 
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.pages}</td>
                <td>{book.rating}</td>
                <td className="text-center">
                  <BookEditModal book={book} />
                </td>
                <td 
                  className="text-center"
                  onClick={() => 
                    showDeleteBookModal(book.title, book.author, book.id)
                  }
                >
                  <WasteImage />
                </td>
              </tr>
          ))}
        </tbody>
      </Table>

      <Link to="/Books">
        <Button variant="outline-secondary" className="mx-1">
          Explore books
        </Button> 
      </Link>

      <Link to="/AddBook">
        <Button variant="outline-primary" className="mx-1">
          Add book
        </Button>
      </Link>
      
      {/*Delete Book Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you want to delete {currentBookTitle} by {currentBookAuthor}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Cancel
          </Button>
          <Button 
            variant="danger" 
            onClick={() => handleDeleteBook(currentBookId)}
          >
              Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}

export default BookTable;
