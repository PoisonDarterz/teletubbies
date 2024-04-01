import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';
import './tailwind.css';

import Login from "./pages/general/Login"
import Forum from "./pages/module3/Forum"
import ForgotPwd from "./pages/general/ForgotPwd"
import Admin from "./pages/module5/admin"
import Resource from "./pages/module2/resource"

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/forgotpwd" element={<ForgotPwd />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/resource" element={<Resource />} />

          </Routes>
    </Router>
  );
}

export default App;