import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Home from "./pages/home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy/>} />
        <Route path="/sell" element={<Sell/>} />
        <Route path="/rent" element={<h1>Rent Page</h1>} />
        <Route path="/donate" element={<h1>Donate Page</h1>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
  );
};

export default App;
