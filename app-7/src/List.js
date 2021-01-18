import React, { Component } from 'react'
import ToDo from './ToDo'

export default class List extends Component {

  render() {
    let newList = this.props.toDoList.map((el, i) => {
      return <ToDo key = { i } task = {el} />
    })
    return (
      <div>
        { newList }
      </div>
    )
  }
}