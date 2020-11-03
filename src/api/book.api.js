import Axios from 'axios';

const BASE_URL = "http://localhost:3010/books";

export const getBooks = () => {
  return Axios.get(`${BASE_URL}`).catch((err) => console.error(err))
};

export const handleDelete = (id) => {
  return Axios.delete(`${BASE_URL}/${id}`).catch((err) => 
    console.error(err))
};

export const handlePost = (title, author, pages, rating) => {
  return Axios.post(`${BASE_URL}`, {
    title: title,
    author: author,
    pages: pages,
    rating: rating,
  }).catch((err) => console.error(err))
};

export const handleBookEdit = (title, author, id, pages, rating) => {
  return Axios.put(`${BASE_URL}/${id}`, {
    title: title,
    author: author,
    pages: pages,
    rating: rating,
  }).catch((err) => console.error(err))
}
