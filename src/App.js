import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FavoritedMovies from './Containers/FavoritedMovies';
import Login from './Containers/Login';
import MovieSearch from './Containers/MovieSearch';

export default class App extends Component {
  render() {
    return (
      <Router>
          <Route path='/' exact Component={MovieSearch} />
          <Route path='/login' Component={Login} />
          <Route path='/favoritedMovies' Component={FavoritedMovies} />
      </Router>
    )
  }
}
