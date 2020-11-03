import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from '../src/components/Home/Home';
import Books from '../src/components/Books/Books';
import AddBook from './components/AddBook/AddBook';
import 'bootstrap/dist/css/bootstrap.min.css';
// import AddBookForm from './components/AddBook/AddBookForm';

function App() {
  return (
    <HashRouter>
        <Route exact path="/" component={Home}></Route>
        <Route path="/Books" component={Books}></Route>
        <Route path="/AddBook" component={AddBook} ></Route>
    </HashRouter>  
  );
}

export default App;
