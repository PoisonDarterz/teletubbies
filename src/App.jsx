import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';
import './tailwind.css';
// General module imports
import Login from "./pages/general/Login"
import ForgotPwd from "./pages/general/ForgotPwd"
// Module 1 imports
import Module1 from "./pages/module1/Landingpage"
import VRScene from "./pages/module1/VRScene" // Make sure the path is correct

// Module 2 imports
import Resource from "./pages/module2/resource"
// Module 3 imports
import Module3 from "./pages/module3/Module3"
import Forum from "./pages/module3/Forum"
import Faq from "./pages/module3/FAQ"
// Module 4 imports
import Module4 from "./pages/module4/Module4"
// Module 5 imports
import Admin from "./pages/module5/admin"

function App() {
  return (
    <Router>
      <Routes>
        {/* General routes */}
        <Route path="/" element={<Login />} />
        <Route path="/forgotpwd" element={<ForgotPwd />} />

        {/* Module 1 routes */}
        <Route path="/module1" element={<Module1 />} />
        <Route path="/VRScene" element={<VRScene />} />

        {/* Module 2 routes */}
        <Route path="/resource" element={<Resource />} />
        {/* Module 3 routes */}
        <Route path="/module3" element={<Module3 />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/faq" element={<Faq />} />
        {/* Module 4 routes */}
        <Route path="/module4" element={<Module4 />} />
        {/* Module 5 routes */}
        <Route path="/admin" element={<Admin />} />

      </Routes>
    </Router>
  );
}

export default App;