import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy/>} />
        <Route path="/sell" element={<Sell/>} />
        <Route path="/rent" element={<h1>Rent Page</h1>} />
        <Route path="/donate" element={<h1>Donate Page</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
