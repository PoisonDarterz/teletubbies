import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';
import './tailwind.css';
// General module imports
import Login from "./pages/general/Login"
import ForgotPwd from "./pages/general/ForgotPwd"
// Module 1 imports
// Module 2 imports
import Resource from "./pages/module2/resource2"
import Training from "./pages/module2/training"
import Page from "./pages/module2/featured"
// Module 3 imports
import Module3 from "./pages/module3/Module3"
import Forum from "./pages/module3/Forum"
import Faq from "./pages/module3/FAQ"
// Module 4 imports
import Module4 from "./pages/module4/Module4"
// Module 5 imports
import Admin from "./pages/module5/admin"
import Engagement from "./pages/module5/engagement";
import Schedule from "./pages/module5/schedule";

function App() {
  return (
    <Router>
      <Routes>
        {/* General routes */}
        <Route path="/" element={<Login />} />
        <Route path="/forgotpwd" element={<ForgotPwd />} />
        {/* Module 1 routes */}
        {/* Module 2 routes */}
        <Route path="/resource" element={<Resource />} />
        <Route path="/training" element={<Training />} />
        <Route path="/featured" element={<Page />} />
        {/* Module 3 routes */}
        <Route path="/module3" element={<Module3 />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/faq" element={<Faq />} />
        {/* Module 4 routes */}
        <Route path="/module4" element={<Module4 />} />
        {/* Module 5 routes */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/engagement" element={<Engagement />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </Router>

  );
}

export default App;