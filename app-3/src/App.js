import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      inputCopy: '',
      listItem: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }

  updateText(val) {
    this.setState({ inputCopy: val })
  }

  render() {
    let filteredArr = this.state.listItem.filter( (el) => {
      return el.includes( this.state.inputCopy )
    }).map( ( el, i ) => {
      return <h2 key={ i }> { el } </h2>
    })

    return (
    <div className="App">
      <input onChange={ ( e ) => this.updateText(e.target.value)} type="text" />
      { filteredArr }
    </div>
    );
  }
}

export default App;
