//// test
import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

function Login() {
  const [email, setEmail] = React.useState('');
  const [user_password, setPassword] = React.useState('');
  const [msg, setmsg] = React.useState('');

  // const { setLogin, setClientId } = props;
  const data = { email, user_password };

  const heroku = `https://expressbackkav.herokuapp.com/`;
  const url = `${heroku}log-in`;
  // console.log('url', url);

  const loginHandler = (event) => {
    event.preventDefault();
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setmsg(res.msg);
        // console.log(res.access_token);
        localStorage.setItem('access_token', res.access_token);
      })
      .catch((error) => console.error(error.msg));
  };
  return (
    <div className='login center'>
      <h1 id='log-in-title'>Log in</h1>

      <form onSubmit={loginHandler}>
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
        <button type='submit'>Login</button>
      </form>
      <br />
      <br />
      <NavLink to='/signup'>Click Here To Signup</NavLink>
      <h1>{msg} </h1>
      {msg === 'Logged in' ? <Redirect to={`/`} /> : null}
    </div>
  );
}
export default Login;
