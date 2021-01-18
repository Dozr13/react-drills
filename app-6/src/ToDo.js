import React, { Component } from 'react'
import App from './App'

export default class ToDo extends Component {
  render() {
    let toDoList = this.props.tdl.map( (el, i) => {
      return <h2 key={ i }>{ el }</h2>
    })

    return(
      <div>
        { toDoList }
      </div>
    )
  }
}