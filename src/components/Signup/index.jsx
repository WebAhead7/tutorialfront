import React from 'react';
import { Redirect } from 'react-router-dom'
const heroku = `https://expressbackkav.herokuapp.com`;

const Signup = () => {
  const [userid, setUserId] = React.useState("");
  const [username, setUserName] = React.useState("");
  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [signed, setsigned] = React.useState(false);

  let reqData = {
    userid: userid,
    username: username,
    firstname: firstname,
    lastname: lastname,
    email: email,
    user_password: password
  }

  const signup = (e) => {
    alert('Signed Up Successfully')
    e.preventDefault();

    fetch(`${heroku}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      body: new URLSearchParams(reqData)
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData)
        setsigned(true);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return <div>

    <h4>Signup </h4>
    <form onSubmit={e => signup(e)}>

      <div className="userid">
        <input
          type="text"
          name="userid"
          style={{ width: '300px' }}
          placeholder="user id "
          value={userid}
          required
          onChange={event => setUserId(event.target.value)}
        // onChange={/*handleChange*/}
        />
      </div>

      <div className="username">
        <input
          type="text"
          style={{ width: '300px' }}
          name="username"
          placeholder="user name "
          value={username}
          required
          onChange={event => setUserName(event.target.value)}
        // onChange={/*handleChange*/}
        />
      </div>

      <div className="firstname">
        <input
          type="text"
          name="firstname"
          style={{ width: '300px' }}
          placeholder="first name "
          value={firstname}
          required
          onChange={event => setFirstName(event.target.value)}
        // onChange={/*handleChange*/}
        />
      </div>

      <div className="lastname">
        <input
          type="text"
          name="lastname"
          placeholder="last name"
          style={{ width: '300px' }}
          value={lastname}
          required
          onChange={event => setLastName(event.target.value)}
        // onChange={/*handleChange*/}
        />
      </div>

      <div className="email">
        <input
          type="email"
          name="email"
          placeholder="email"
          style={{ width: '300px' }}
          value={email}
          required
          onChange={event => setEmail(event.target.value)}
        // onChange={/*handleChange*/}
        />

      </div>

      <div className="password">
        <input
          type="password"
          name="password"
          placeholder="Password"
          style={{ width: '300px' }}
          value={password}
          required
          onChange={event => setPassword(event.target.value)}
        // onChange={/*handleChange*/}
        />

      </div>


      <div className="submit">
        <button type="submit">Submit</button>
      </div>
    </form>
    {signed ? <Redirect to={`/Login`} /> : null}
  </div>

};

export default Signup;
