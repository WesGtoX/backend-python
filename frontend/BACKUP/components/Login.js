import React, { Component } from 'react';
// import Dashboard from './Dashboard'

class Login extends Component {

  state = {
    credentials: {username: '', password: ''}
  }

  // const dispatch = (obj) => {
  //   console.log(obj);
  // }

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

        // localStorage.setItem('token', data.token)
      }
    )
    .catch( error => console.error(error) )
    // .catch((error) => { // error is a Promise
    //   error.then((e) => {
    //       dispatch({
    //         // type: failureHandler,
    //         apiResponse: e, // e is now the resolved value of 'response.text()'
    //         apiMessage : "System encountered error. Please try again later."
    //       });
    //   });
    // })
    event.preventDefault()
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
          <div className="form-group">
            <label>
              <input type="text" name="username" placeholder="Usuário" 
              value={this.state.credentials.username} 
              onChange={this.inputChanged} />
            </label>

            <br/>

            <label>
              <input type="password" name="password" placeholder="Senha" 
              value={this.state.credentials.password} 
              onChange={this.inputChanged} />
            </label>

            <br/>
            
            <button className="btn btn-primary" onClick={this.login}>Entrar</button>
            <button className="btn btn-secondary" onClick={this.register}>Registrar</button>
          </div>
        </div>
      )
    }
  }

export default Login
