import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class Index extends Component {
  render() {
    return (
      <div>
        <h1>Teste</h1>
      </div>
    )
  }
}

const wrapper = document.getElementById('create-app')
wrapper ? ReactDOM.render(<Index />, wrapper) : false;


