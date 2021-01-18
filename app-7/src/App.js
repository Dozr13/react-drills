import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTask from './NewTask'
import List from './List'


class App extends Component {
  constructor() {
    super()

    this.state = {
      toDoList: []
    }

    this.addTask = this.addTask.bind(this)
  }

  addTask(task) {
    this.setState({
      toDoList: [...this.state.toDoList, task]
    })
  }
  
  render() {
    return (
    <div className="App">
      <h1>My to-do list:</h1>
      <NewTask add={ this.addTask } />
      <List toDoList={ this.state.toDoList } />
    </div>
    );
  }
}

export default App;
