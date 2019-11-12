import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"

import Logo from "../../assets/credtodos.svg"
import api from "../../services/api"
import { login } from "../../services/auth"

import { Form, Container } from "./styles"
import { GlobalStyle } from "../../styles/global"

class SignIn extends Component {
  state = {
    username: "",
    password: "",
    error: ""
  }

  handleSignIn = async e => {
    e.preventDefault()
    const { username, password } = this.state
    if (!username || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" })
    } else {
      try {
        const response = await api.post("/auth/", { username, password })
        login(response.data.token)
        this.props.history.push("/customer")
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais."
        })
      }
    }
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignIn}>
          <img src={Logo} alt="CredTodos logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Entrar</button>
          <hr />
          <Link to="/signup">Criar cadastro</Link>
        </Form>
        <GlobalStyle />
      </Container>
    )
  }
}

export default withRouter(SignIn)