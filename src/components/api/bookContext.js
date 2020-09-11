import React from 'react';
import Axios from 'axios';

const bookContext = React.createContext({
  state: {
    books: [],
    contextBooks: []
  },

  BaseUrl: 'http://localhost:3010',

  getContext(BaseUrl) { 
    Axios.get(`${BaseUrl}/books`)
      .then(
        res => this.setState({ contextBooks: res.data})
      )
  },
})

export default bookContext;