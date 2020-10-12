// import { React, useState, setState, useContext } from 'react';
// import BookContext from './bookContext';
import Axios from 'axios';

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

export const handlePost = (title, author, pages, rating) => {
  return Axios.post(`${BaseUrl}/book`, {
    title: title,
    author: author,
    pages: pages,
    rating: rating
  })
    .catch(err => console.error(err))
}

export const handleBookEdit = (title, author, id, pages, rating) => {
  return Axios.put(`${BaseUrl}/book/${id}`, {
    title: title,
    author: author,
    pages: pages,
    rating: rating
  })
  .catch(err => console.error(err))
}