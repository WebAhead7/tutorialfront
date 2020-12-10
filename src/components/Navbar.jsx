import React, { useState, useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import getUser from './Users/index';


const Navbar = ({ isLoggedIn, setIsLoggedIn, user, setUser }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  // const [user, setUser] = useState({})

  // useEffect(() => {

  //   const token = window.localStorage.getItem('access_token')

  //   if (token) {
  //     getUser(token)
  //       .then((data) => {
  //         setUser(data)
  //         setIsLoggedIn(true)
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       })
  //   }
  // }, [isLoggedIn])

  const logOut = () => {
    localStorage.removeItem('access_token')
    setUser({})
    setIsLoggedIn(false)
  }

  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <NavLink to="/" className="brand-logo">
          Tutorials
        </NavLink>
        <ul className="right">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {isLoggedIn ?
            [
              <li>
                Welcome {user}
              </li>,
              <li>
                <NavLink to='/' onClick={logOut}> Log Out </NavLink>
              </li>] :
            [
              <li>
                <NavLink key={0} to='/signup'>Sign up</NavLink>
              </li>,
              <li>
                <NavLink key={1} to='/Login'>Log in</NavLink>
              </li>
            ]
          }

          {/* <li>
            <NavLink to='/cart'>
              Cart {props.countItems === 0 ? null : `(${props.countItems})`}
            </NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
