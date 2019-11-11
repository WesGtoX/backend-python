import React, { Component, Fragment } from 'react';

class Dashboard extends Component {

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

  componentDidMount() {
    this.loadCustomers()
  }

  render() {
    return (
      <Fragment>
        <h2>Customers</h2>
        <div className="container">
          <table className="table table-striped">
            <thead>
              <tr className="justify-content-md-center">
                <th>#</th>
                <th>Nome</th>
                <th />
              </tr>
            </thead>
            
            { this.state.customers.map( customers => { return (
              <tbody key={customers.id}>
                <tr className="justify-content-md-center">
                  <td>{customers.id}</td>
                  <td>{customers.name}</td>
                  <td>
                    <button className="btn btn-primary btn-sm"> {" "} Editar </button>
                    <button className="btn btn-danger btn-sm"> {" "} Deletar </button>
                  </td>
                </tr>
              </tbody>
            ) }) }
          </table>
        </div>
      </Fragment>
    )
  }
}


export default Dashboard