import Axios from 'axios';

const BASE_URL = 'http://localhost:3010';

//get method, returning books, to be set with setState
export const getBooks = () => {
  return Axios.get(`${BASE_URL}/books`)
}

export const handleDelete = (currentId) => {
  return Axios.delete(`${BASE_URL}/book/${currentId}`)
}

export const handlePost = (title, author, pages, rating) => {
  return Axios.post(`${BASE_URL}/book`, {
    title,
    author,
    pages,
    rating
  })
}

export const handleBookEdit = (title, author, id, pages, rating) => {
  return Axios.put(`${BASE_URL}/book/${id}`, {
    title,
    author,
    pages,
    rating
  })
}