import React, { Component } from 'react'

export default class Login extends Component {
  constructor() {
    super()

    this.state = {
      userName: '',
      pw: ''
    }

    this.login = this.login.bind(this)

  }

  updateUser( val ) {
    this.setState({ userName: val })
  }

  updatePass( val ) {
    this.setState({ pw: val })
  }

  login() {
    alert( `User: ${this.state.userName}, Password: ${this.state.pw}` )
  }

  render() {
    return (
    <div className="Login">
      <input onChange={ (e) => this.updateUser(e.target.value)} type="text" />
      <input onChange={ (e) => this.updatePass(e.target.value)} type="text" />
      <button onClick={ this.login }> Login </button>
    </div>
    );
  }
}
