import './App.css';
import Tutorials from './components/Tutorials';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getTutorials } from './components/Api/Api';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  const [list, setList] = useState(null);
  // const [successful, setSuccessful] = useState(false);
  useEffect(() => {
    getTutorials(setList);
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      {/* msg === 'You have successfully signed up' */}
      {/* who is logged in maybe here inside Navbar --> countItems={cart.length} */}
      <Route exact path='/' component={() => <Tutorials list={list} />} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={() => <Signup />} />
    </BrowserRouter>
  );
}

export default App;
