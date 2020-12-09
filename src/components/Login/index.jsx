//// test
import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

function Login() {
  const [email, setEmail] = React.useState('');
  const [user_password, setPassword] = React.useState('');
  const [msg, setmsg] = React.useState('');

  // const { setLogin, setClientId } = props;
  const data = { email, user_password };

  const heroku = `https://expressbackkav.herokuapp.com/`;
  const url = `${heroku}log-in`;
  // console.log('url', url);

  function loginHandler() {
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setmsg(res.msg);
        console.log(res);
      })
      .catch((error) => console.error(error.msg));
  }
  return (
    <div className='login center'>
      <h1 id='log-in-title'>Log in</h1>

      <form>
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
      </form>
      <button onClick={loginHandler}>Login</button>
      <br />
      <br />
      <NavLink to='/signup'>Click Here To Signup</NavLink>
      <h1>{msg} </h1>
    </div>
  );
}
export default Login;
