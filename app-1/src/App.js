import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component{
  constructor() {
    super()

    this.state = {
      inputCopy: ''
    }
  }

  updateText(val) {
    this.setState({ inputCopy: val })
  }


  render () {
    return (
    <div className="App">
      <input onChange={ (e) => this.updateText(e.target.value)} type="text" />
      <h3>{ this.state.inputCopy }</h3>
    </div>
    );
  }
}