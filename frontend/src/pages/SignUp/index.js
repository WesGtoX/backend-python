import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"

import Logo from "../../assets/credtodos.svg"
import api from "../../services/api"

import { Form, Container } from "./styles"
import { GlobalStyle } from "../../styles/global"

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: ""
  }

  handleSignUp = async e => {
    e.preventDefault()
    const { username, email, password } = this.state
    if (!username || !email || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" })
    } else {
      try {
        await api.post("/api/v1/user/", { username, email, password })
        this.props.history.push("/")
      } catch (err) {
        console.log(err)
        this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" })
      }
    }
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
          <img src={Logo} alt="CredTodos logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Cadastrar</button>
          <hr />
          <Link to="/">Fazer login</Link>
        </Form>
        <GlobalStyle />
      </Container>
    )
  }
}

export default withRouter(SignUp)