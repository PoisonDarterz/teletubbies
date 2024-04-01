import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';
import './tailwind.css';
// General module imports
import Login from "./pages/general/Login"
import ForgotPwd from "./pages/general/ForgotPwd"
// Module 1 imports
// Module 2 imports
import Resource from "./pages/module2/resource"
import Training from "./pages/module2/training"
// Module 3 imports
import Module3 from "./pages/module3/Module3"
import Forum from "./pages/module3/Forum"
import Faq from "./pages/module3/FAQ"
// Module 4 imports
// Module 5 imports
import Admin from "./pages/module5/admin"

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/forgotpwd" element={<ForgotPwd />} />

            <Route path="/resource" element={<Resource />} />
            <Route path="/training" element={<Training />} />

            <Route path="/module3" element={<Module3 />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/faq" element={<Faq />} />

            <Route path="/admin" element={<Admin />} />
            
          </Routes>
    </Router>
  );
}

export default App;