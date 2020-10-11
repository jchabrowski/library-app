import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import BookTable from '../BookTable/BookTable';
import {getBooks} from '../api/book.api';
// import Axios from 'axios';
import BookContext from '../api/bookContext';




class Home extends React.Component {
  state = {
    books: []
  }
  

  componentDidMount() {
    getBooks()
      .then(res => this.setState({books: res.data}))
  }

  updateBooks = () => {
    getBooks()
      .then(res => this.setState({books: res.data}))
  }


  render(){
    return (
      <React.Fragment>
        <BookContext.Provider value={this.state.books}>
          <Row className="justify-content-center py-5 mx-auto">
            <Col xs={12} s={8} m={6} l={6} lg={6}>
              <BookTable updateBooks={this.updateBooks}/>

              <Link to="/Books">
                <button>Explore books</button> 
              </Link>

              <Link to="/Search">
                <button>Search for a specific book</button>
              </Link>
            </Col>
          </Row>
        </BookContext.Provider>
      </React.Fragment>
    );
  }  
};

export default Home;