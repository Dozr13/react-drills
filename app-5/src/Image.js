import React, { Component} from 'react'

export default class Image extends Component {
  constructor() {
    super()


  }

  render() {
    return (
      <div>
        <img src={ this.props.imgPlace } />
      </div>
    )
  }
}