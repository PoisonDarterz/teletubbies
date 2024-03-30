import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';
import './tailwind.css';

import Login from "./pages/general/Login"
import Forum from "./pages/module3/Forum"
import ForgotPwd from "./pages/general/ForgotPwd"

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/forgotpwd" element={<ForgotPwd />} />
          </Routes>
    </Router>
  );
}

export default App;