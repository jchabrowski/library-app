// import { React, useState, setState, useContext } from 'react';
// import BookContext from './bookContext';
import Axios from 'axios';

//context
// const books = useContext(BookContext);

const BaseUrl = 'http://localhost:3010';

//get method, returning books, to be set with setState
export const getBooks = () => {
  return Axios.get(`${BaseUrl}/books`)
    .catch(err => console.error(err))
}

export const handleDelete = (currentId) => {
  return Axios.delete(`${BaseUrl}/book/${currentId}`)
    .catch(err => console.error(err))
}