import React from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

import { isAuthenticated } from "./services/auth"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Customer from "./pages/Customer"
import Customers from "./pages/Customers"

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
)

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <PrivateRoute path="/customer" component={Customer} />
      <PrivateRoute path="/customers" component={Customers} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
)

export default Routes