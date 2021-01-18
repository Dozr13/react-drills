import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './ToDo'

class App extends Component {
  constructor() {
    super()

    this.state = {
      arr: [],
      input: ''
    }

    this.addTask = this.addTask.bind(this)
  }

  inputValue(val) {
    this.setState({ input: val })
  }

  addTask() {
    this.setState({
      arr: [...this.state.arr, this.state.input],
      input: ""
    })
  }

  render() {
    return (
    <div className="App">
      <h1>My to do list:</h1>

      <div>
        <input onChange={ (e) => this.inputValue( e.target.value ) }/>
        <button onClick={ this.addTask }>Add Task</button>
        <ToDo tdl={ this.state.arr } />
      </div>
    </div>
    );
  }
}

export default App;
