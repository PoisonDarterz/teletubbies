import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';
import './tailwind.css';
// General module imports
import Login from "./pages/general/Login"
import ForgotPwd from "./pages/general/ForgotPwd"
import Maze from "./pages/general/Maze"


// Module 1 imports
import Module1 from "./pages/module1/Module1"
import VRTour from "./pages/module1/VRTour"
import GeneralInfo from "./pages/module1/GeneralInfo"
import Station2 from "./pages/module1/station2"
import Submission from "./pages/module1/Submission"
import ProfilePage from "./pages/module1/profile";
import WelcomePackage from "./pages/module1/WelcomePackage";
import VideoComponent from "./pages/module1/video";
import Account from "./pages/module1/account";


// Module 2 imports
import Resource from "./pages/module2/resource2"
import Training from "./pages/module2/training"
import Page from "./pages/module2/featured"
import SampleProject from "./pages/module2/sampleproject";
import Target from "./pages/module2/target";
import Module2 from "./pages/module2/module2";
import Testing from "./pages/module2/testing";
// Module 3 imports
import Module3 from "./pages/module3/Module3"
import Forum from "./pages/module3/Forum"
import Faq from "./pages/module3/FAQ"
// Module 4 imports
import Module4 from "./pages/module4/Module4"
import Feedback from "./pages/module4/feedback"
import HelpDesk from "./pages/module4/helpdesk";
import Goal from "./pages/module4/goal";
// Module 5 imports
import Admin from "./pages/module5/admin"
import Engagement from "./pages/module5/engagement";
import Schedule from "./pages/module5/schedule";
import HR from "./pages/module5/hr";
import Email from "./pages/module5/email";
import Assign from "./pages/module5/assign";
import Popup from "./pages/module5/popup";
import ForumAdmin from "./pages/module5/ForumAdmin";
import FAQAdmin from "./pages/module5/FAQAdmin";
import HelpdeskAdmin from "./pages/module5/HelpdeskAdmin";

function App() {

  return (
    <Router>
      <Routes>
        {/* General routes */}
        <Route path="/" element={<Login />} />
        <Route path="/forgotpwd" element={<ForgotPwd />} />
        <Route path="/Maze" element={<Maze />} />
        <Route path="/VideoComponent" element={<VideoComponent />} />
        {/* Module 1 routes */}
        <Route path="/station1" element={<Module1 />} />
        <Route path="/vrtour" element={<VRTour />} />
        <Route path="/generalinfo" element={<GeneralInfo />} />
        <Route path="/station2" element={<Station2 />} />
        <Route path="/Submission" element={<Submission />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/welcomepackage" element={<WelcomePackage />} />
        <Route path="/account" element={<Account />} />
       

        {/* Module 2 routes */}
        <Route path="/station3" element={<Module2 />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/training" element={<Training />} />
        <Route path="/featured" element={<Page />} />
        <Route path="/sampleproject" element={<SampleProject />} />
        <Route path="/target" element={<Target />} />
        <Route path="/testing" element={<Testing />} />
        {/* Module 3 routes */}
        <Route path="/station4" element={<Module3 />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/faq" element={<Faq />} />
        {/* Module 4 routes */}
        <Route path="/station5" element={<Module4 />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/helpdesk" element={<HelpDesk />} />
        <Route path="/goal" element={<Goal />} />

        {/* Module 5 routes */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/engagement" element={<Engagement />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/hr" element={<HR />} />
        <Route path="/email" element={<Email />} />
        <Route path="/assign" element={<Assign />} />
        <Route path="/popup" element={<Popup />} />
        <Route path="/forumadmin" element={<ForumAdmin />} />
        <Route path="/faqadmin" element={<FAQAdmin />} />
        <Route path="/helpdeskadmin" element={<HelpdeskAdmin />} />
       </Routes>
    </Router>

  );
}

export default App;