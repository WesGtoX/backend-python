import React, { Component } from 'react';

class Login extends Component {

  state = {
    credentials: {username: '', password: ''}
  }

  login = event => {
    fetch('http://127.0.0.1:8000/auth/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        this.props.userLogin(data.token)
      }
    )
    .catch( error => console.error(error) )
  }

  inputChanged = event => {
    const cred = this.state.credentials
    cred[event.target.name] = event.target.value
    this.setState({credentials: cred})
  }

  register = event => {
    fetch('http://127.0.0.1:8000/api/v1/user/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        console.log(data.token)
      }
    )
    .catch( error => console.error(error) )
  }

  inputChanged = event => {
    const cred = this.state.credentials
    cred[event.target.name] = event.target.value
    this.setState({credentials: cred})
  }
  
  render() {
    return (
        <div>
          <h1>Login User Form</h1>

          <label>
            <input type="text" name="username" placeholder="Usuário" 
            value={this.state.credentials.username} 
            onChange={this.inputChanged} />
          </label>

          <br />

          <label>
            <input type="password" name="password" placeholder="Senha" 
            value={this.state.credentials.password} 
            onChange={this.inputChanged} />
          </label>

          <br />
          
          <button onClick={this.login}>Entrar</button>
          <button onClick={this.register}>Registrar</button>
        </div>
      )
    }
  }

export default Login;
