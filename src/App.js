import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './GlobalStyles'
import MovieSearch from './Containers/MovieSearch';
import SpecificMovie from './Containers/SpecificMovie';


export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <ToastContainer />
          <GlobalStyle />
          <Route path='/' exact component={MovieSearch} />
          <Route path='/specificMovie' component={SpecificMovie} />
        </Router>
      </>
    )
  }
}
