import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (){
    super()

    this.state = {
      listItem: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }
  render() {
    let liArr = this.state.listItem.map( (el, i) => {
      return <h2 key={ i }>{ el }</h2>
    })

    return (
    <div className="App">
      { liArr }
    </div>
    );
  }
}

export default App;
