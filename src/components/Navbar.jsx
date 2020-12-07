import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
const Navbar = (props) => {
  return (
    <nav className='nav-wrapper blue darken-3'>
      <div className='container'>
        <NavLink to='/' className='brand-logo'>
          Tutorials
        </NavLink>
        <ul className='right'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
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
