import React from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
  return (
    <div>
      Searching for books
      <Link to="/">
        <button>Go back!</button>
      </Link>
    </div>
    
  );
};

export default Search;