import "./App.css";
import Tutorials from "./components/Tutorials";
import Users from "./components/Users";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import React, { useState } from "react";
function App(props) {
  return (
    <BrowserRouter>
      <Navbar />

      {/* who is logged in maybe here inside Navbar --> countItems={cart.length} */}
      <Route exact path="/" component={() => <Tutorials />} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
}

export default App;
