import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from "./Image"

class App extends Component {
  constructor() {
    super()


  }

  render() {
    return (
    <div className="App">
      <Image imgPlace={ 'https://images.unsplash.com/photo-1606787947039-ae6b8927f3d8?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' } />
    </div>
    );
  }
}

export default App;
