import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store'
import App from './App'

const wrapper = document.getElementById('root')
wrapper ? ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, wrapper) : console.log('failed to find wrapper');


