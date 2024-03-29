import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/Login/Login.jsx";
// import Test from "./Components/Test.jsx";
import Fetch from "./Components/Fetch.jsx";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/fetch" element={<Fetch />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
