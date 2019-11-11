import React, { useState } from 'react'
import './App.css'
import Login from './components/Login'
// import Customers from './components/Customers'
import Dashboard from './components/Dashboard'
// import Dashboard from './components/Dashboard'

function App() {

  const [token, setToken] = useState('')

  const userLogin = (tok) => {
    setToken(tok)
  }

  // const dispatch = (obj) => {
  //   console.log(obj);
  // }

  return (
    <div className="App">
      <Login userLogin={userLogin} />
      <br/>
      <br/>
      <Dashboard token={token} />
    </div>
  )
}

export default App;
