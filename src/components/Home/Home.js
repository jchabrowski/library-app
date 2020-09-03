import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to="/Books">
        <button>Explore books</button> 
      </Link>

      <Link to="/Search">
        <button>Search for a specific book</button>
      </Link>
    </div>
  );
};

export default Home;