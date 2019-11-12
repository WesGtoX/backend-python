import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"

import Logo from "../../assets/credtodos.svg"
import api from "../../services/api"
import { isAuthenticated } from "../../services/auth"

import { Form, Container } from "./styles"
import { GlobalStyle } from "../../styles/global"

class Customers extends Component {
  state = {
    customers: [],
  }

  Customers = async e => {
    e.preventDefault()
    const { 
      id, name, cpf, phone, email,
      cep, address, number, complement,
      neighborhood, city, uf
     } = this.state.customers
     const isAuth = isAuthenticated()
     console.log(isAuth)
    if (!isAuth) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" })
    } else {
      try {
        await api.post("/api/v1/customers/", {
          id, name, cpf, phone, email,
          cep, address, number, complement,
          neighborhood, city, uf
        })
        this.props.history.push("/customers")
      } catch (err) {
        console.log(err)
        this.setState({ error: "Ocorreu um erro ao registrar sua conta." })
      }
    }
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.Customers}>
          <img src={Logo} alt="CredTodos logo" />
          {this.state.error && <p>{this.state.error}</p>}

        <input type="text" name="name" required placeholder="Nome"
          onChange={e => this.setState({ name: e.target.value })} />
          
        <input type="text" name="cpf" required placeholder="CPF"
          onChange={e => this.setState({ cpf: e.target.value })} />
          
        <input type="text" name="phone" required placeholder="Telefone"
          onChange={e => this.setState({ phone: e.target.value })} />
          
        <input type="email" name="email" required placeholder="E-mail"
          onChange={e => this.setState({ email: e.target.value })} />
          
        <input type="text" name="cep" required placeholder="CEP"
          onChange={e => this.setState({ cep: e.target.value })} />
          
        <input type="text" name="address" disabled placeholder="Endereço"
          onChange={e => this.setState({ address: e.target.value })} />
          
        <input type="text" name="number" disabled placeholder="Número"
          onChange={e => this.setState({ number: e.target.value })} />
          
        <input type="text" name="complement" disabled placeholder="Complemento"
          onChange={e => this.setState({ complement: e.target.value })} />
          
        <input type="text" name="neighborhood" disabled placeholder="Bairro"
          onChange={e => this.setState({ neighborhood: e.target.value })} />
          
        <input type="text" name="city" disabled placeholder="Cidade"
          onChange={e => this.setState({ city: e.target.value })} />
          
        <input type="text" name="uf" disabled placeholder="UF"
          onChange={e => this.setState({ uf: e.target.value })} />
          
          <button type="submit">Cadastrar Cliente</button>
          <hr />
          <Link to="/customers">Listar Clientes</Link>
        </Form>
        <GlobalStyle />
      </Container>
    )
  }
}

export default withRouter(Customers)