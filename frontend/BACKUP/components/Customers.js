import React, { Component } from 'react';
import Dashboard from './Dashboard';

class Customers extends Component {

  state = {
    customers: []
  }

  loadCustomers = () => {
    try {
      fetch('http://127.0.0.1:8000/api/v1/customers/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${this.props.token}`
        },
        body: JSON.stringify(this.state.credentials)
      })
      .then( data => data.json())
      .then(
        data => {
          this.setState({customers: data})
        }
      )
      .catch( error => console.error(error) )
    } catch(e) {
      alert("You are not a Admin User")
    }
    // event.preventDefault()
  }

  render() {
    let customers = []
    try {
      customers = this.state.customers.map( customers => { return <h3 key={customers.id}>{customers.name}</h3> })
    } catch(e) {
      // console.log(e)
      return Dashboard
    }

    // { this.state.customers.map( customers => { return <h3 key={customers.id}>{customers.name}</h3> })}

    return (
        <div>
          <h1>Customers</h1>

          { customers }
          
          <button onClick={this.loadCustomers}>Load Customers</button>
        </div>
      )
    }
  }

export default Customers
