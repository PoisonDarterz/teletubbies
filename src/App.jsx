import logo from './logo.svg';
import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';

import Login from "./pages/general/Login"
import Forum from "./pages/module3/Forum"

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/forum" element={<Forum />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;