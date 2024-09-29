import React, { useState, useEffect } from 'react'
import './App.css'
import { useNavigate, Link, redirect } from 'react-router-dom'

function Login() {


  const navigate = useNavigate()
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const Redirect = async (event) => {

    event.preventDefault();

    const response = await fetch('/email', {
      method:"POST",
      body: JSON.stringify({email, password}),
      headers: {"Content-Type": "application/json"} 

    })

    const json = await response.json()

        navigate("/Dashboard")
    
    
  
  }

    

    
  return (
    <form className='App-header' onSubmit={Redirect}>
      <div>
        Camping Co.
      </div>
      <div>
        <input type='email' placeholder='Enter email...' name='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
      </div>
      <div>
        <input type='password' placeholder='Enter password...' name='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
      </div>
      <Link to="Registration">Registration</Link>
      <div className='App'>
        <button>login</button>
      </div>
    </form>
  );
}

export default Login;
