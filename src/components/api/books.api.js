import Axios from 'axios';

export default class BooksApi {

  getBooks = () => {
    const BaseUrl = `http://localhost:3010`;
      return Axios.get(`${BaseUrl}/books`)
  }

  postBook = () => {
    const BaseUrl = `http://localhost:3010`;
      return Axios.post(`${BaseUrl}/books`)
  }
}


  
  
