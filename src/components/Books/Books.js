import React from 'react';
import { Link } from 'react-router-dom';

const Books = () => {
  return (
    <div>
      Books will be held here
      <br></br>
      <Link to="/">
        <button>Go back!</button>
      </Link>
    </div>
  );
};

export default Books;