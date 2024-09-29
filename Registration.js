
import React, { useState, useEffect } from 'react'
import './App.css';
import { useNavigate } from 'react-router-dom'

function Registration(){

const nav = useNavigate();
    

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(email, password)

    const response = await fetch('/', {
        method:"POST",
        body: JSON.stringify({email, password}),
        headers: {"Content-Type": "application/json"} 

    })

    nav("/")

  };


  return(
    <form className='App-header' onSubmit={handleSubmit}>
   <div>
     Create Account
   </div>
   <div>
     <input type='email' placeholder='Enter email...' name='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
   </div>
   <div>
     <input type='password'placeholder='Enter password...' name='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
   </div>
   <div className='App'>
     <button type="submit">create</button>
   </div>
 </form>
  );
}

export default Registration;