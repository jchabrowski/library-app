import React from 'react';
import { Link } from 'react-router-dom';
import {Table, Col, Row} from 'react-bootstrap';
// import BooksApi from '../api/books.api';
import Axios from 'axios';
import GearImage from '../assets/icons/gear';
import WasteImage from '../assets/icons/waste';
import bookContext from '../api/bookContext';


export default class Home extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    const BaseUrl = 'http://localhost:3010';
    Axios.get(`${BaseUrl}/books`)
    .then(
      res => this.setState({ books: res.data})
      );  
  }
  
  render () {

    const bookContext = React.createContext({
      contextBooks: this.state.books
    })
    
    const Provider = {bookContext}

    return (
      <React.Fragment>
        <Row className="justify-content-center py-5 mx-auto">
          <Col xs={12} s={8} m l lg={6}>
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
                  {this.state.books.map(book => 
                    <>
                      <tr>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.pages}</td>
                        <td>{book.rating}</td>
                        <td align="center"><GearImage/></td>
                        <td align="center"><WasteImage /></td>
                      </tr>
                    </>)
                  }
              </tbody>
            </Table>

            <Link to="/Books">
              <button>Explore books</button> 
            </Link>

            <Link to="/Search">
              <button>Search for a specific book</button>
            </Link>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
};