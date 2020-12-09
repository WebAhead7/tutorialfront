import React from 'react';
import './style.css';
import { Redirect } from 'react-router-dom';
function Signup() {
  const [userid, setUserId] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [firstname, setFirstName] = React.useState('');
  const [lastname, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [user_password, setPass] = React.useState('');
  const [msg, setMsg] = React.useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    // e.preventDefault();
    const data = {
      userid,
      username,
      firstname,
      lastname,
      email,
      user_password,
    };
    const heroku = `https://expressbackkav.herokuapp.com/`;
    const url = `${heroku}signup`;
    // console.log('url', url);
    console.log(data);
    console.log(JSON.stringify(data));

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log('res: ', res);
        setMsg(res.msg);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='signup center'>
      <form onSubmit={handleSubmit}>
        <h1 id='signup-title'>Sign Up</h1>
        <label htmlFor='userid'>Identification Number:</label>
        <input
          type='text'
          id='userid'
          name='userid'
          required
          value={userid}
          onChange={(event) => setUserId(event.target.value)}
        />
        <br />
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          id='username'
          name='username'
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <label htmlFor='fname'>First name:</label>
        <input
          type='text'
          id='fname'
          name='fname'
          required
          value={firstname}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <br />
        <label htmlFor='lname'>Last name:</label>
        <input
          type='text'
          id='lname'
          name='lname'
          required
          value={lastname}
          onChange={(event) => setLastName(event.target.value)}
        />
        <br />
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          // type='text'
          id='email'
          name='email'
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <label htmlFor='pass'>Password:</label>
        <input
          type='password'
          // type='text'
          id='pass'
          name='pass'
          required
          value={user_password}
          onChange={(event) => setPass(event.target.value)}
        />
        <br />
        <button type='submit'>SUBMIT</button>
      </form>
      <h1>{msg}</h1>
      {msg === 'You have successfully signed up' ? (
        <Redirect to={`/login`} />
      ) : null}
    </div>
  );
}
export default Signup;
