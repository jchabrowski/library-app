import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home/Home';
import Books from '../src/components/Books/Books';
import Search from '../src/components/Search/Search';

function App() {
  return (
    <HashRouter>
        <Route exact path="/" component={Home}></Route>
        <Route path="/Books" component={Books}></Route>
        <Route path="/Search" component={Search} />
    </HashRouter>  
  );
}

export default App;
