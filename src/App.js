import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyles'
// import FavoritedMovies from './Containers/FavoritedMovies/FavoritedMovies';
// import Login from './Containers/Login/Login';
import MovieSearch from './Containers/MovieSearch';

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <GlobalStyle />
          <Route path='/' exact component={MovieSearch} />
          {/* <Route path='/login' component={Login} />
          <Route path='/favoritedMovies' component={FavoritedMovies} /> */}
        </Router>
      </>
    )
  }
}
