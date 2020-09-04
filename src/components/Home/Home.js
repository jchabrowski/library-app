import React from 'react';
import { Link } from 'react-router-dom';
import {Table, Col, Row} from 'react-bootstrap';

const Home = () => {
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
                <th>Action 1</th>
                <th>Action 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lord of the Rings: Fellowship of the Ring</td>
                <td>JRR Tolkien</td>
                <td>500</td>
                <td>5</td>
                <td></td>
                <td>icon</td>
              </tr>
              <tr>
                <td>Lord of the Rings: Two Towers</td>
                <td>JRR Tolkien</td>
                <td>450</td>
                <td>5</td>
                <td></td>
                <td>icon</td>
              </tr>
              <tr>
                <td>Lord of the Rings: Return of the King</td>
                <td>JRR Tolkien</td>
                <td>480</td>
                <td>5</td>
                <td></td>
                <td>icon</td>
              </tr>
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
};

export default Home;