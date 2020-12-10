import React, { useState } from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
const heroku = `https://expressbackkav.herokuapp.com`;

const Login = ({ isLoggedIn, setIsLoggedIn, user, setUser }) => {
  const [email, setEmail] = React.useState('');
  const [user_password, setPassword] = React.useState('');
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  // const [user, setUser] = useState({})
  let reqData = {
    email: email,
    user_password: user_password,
  }

  const login = (e) => {
    e.preventDefault();

    fetch(`${heroku}/log-in`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      body: new URLSearchParams(reqData)
    })
      .then((res) => res.json())
      .then((res) => {
        alert('Logged In Successfully');
        console.log(res)
        setUser(reqData.email)
        setIsLoggedIn(true)
        localStorage.setItem('access_token', res.access_token)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return <div className='login center'>
    <h1 id='log-in-title'>Log in</h1>

    <form onSubmit={e => login(e)}>
      <div className='fields'>
        <input
          type='email'
          placeholder='Email'
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          required
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="submit">
        <button type="submit">Log in</button>
      </div>
    </form>
    {isLoggedIn ? <Redirect to={`/`} /> : null}
  </div>
};

export default Login;
