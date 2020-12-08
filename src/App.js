import "./App.css";
import Tutorials from "./components/Tutorials";
import Users from "./components/Users";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import React, { useState, useEffect } from "react";
import { getTutorials } from "./components/Api/Api";
import EditTutorial from "./components/EditTutorial";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const [list, setList] = useState(null);

  useEffect(() => {
    getTutorials(setList);
  }, []);
  return (
    <BrowserRouter>
      <Navbar />

      {/* who is logged in maybe here inside Navbar --> countItems={cart.length} */}
      <Route exact path="/" component={() => <Tutorials list={list} />} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </BrowserRouter>
  );
}

export default App;
