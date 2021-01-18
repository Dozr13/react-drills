import React, { Component } from 'react'

export default class NewTask extends Component {
  constructor() {
    super()

    this.state = {
      text: ''
    }

    this.addItem = this.addItem.bind(this)
  }

  addItem() {
    this.props.add( this.state.text )
    this.setState({ text: '' })
  }

  inputText(val) {
    this.setState({ text: val })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={ (e) => this.inputText(e.target.value) } />
        <button onClick={ this.addItem }>Add Task</button>
      </div>
    )
  }
}