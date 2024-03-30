import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';

import Login from "./pages/general/Login"
import Forum from "./pages/module3/Forum"

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/forum" element={<Forum />} />
          </Routes>
    </Router>
  );
}

export default App;