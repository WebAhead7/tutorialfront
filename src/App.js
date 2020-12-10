import './App.css';
import Tutorials from './components/Tutorials';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getTutorials } from './components/Api/Api';
import Signup from './components/Signup';
import Login from './components/Login';
import getUser from './components/Users/index';

function App() {
  const [list, setList] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  // const [successful, setSuccessful] = useState(false);
  useEffect(() => {
    getTutorials(setList);
  }, []);

  // useEffect(() => {
  //   const token = window.localStorage.getItem('access_token')

  //   if (token) {
  //     setIsLoggedIn(true)
  //     // getUser(token)
  //     //   .then((data) => {
  //     //     setIsLoggedIn(true)
  //     //     setUser(data);
  //     //   })
  //     //   .catch((error) => {
  //     //     console.log(error)
  //     //   })
  //   }
  // }, [isLoggedIn, Navbar])

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={user} setUser={setUser} />
      {/* msg === 'You have successfully signed up' */}
      {/* who is logged in maybe here inside Navbar --> countItems={cart.length} */}
      <Route exact path='/' component={() => <Tutorials list={list} />} />
      {isLoggedIn ?
        <Route path='/' component={() => <Tutorials list={list} />} /> :
        [
          <Route key={0} path='/login' component={() => <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={user} setUser={setUser} />} />,
          <Route key={1} path='/signup' component={() => <Signup />} />
        ]
      }
    </BrowserRouter>
  );
}

export default App;