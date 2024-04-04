import React from 'react';
import { Link } from 'react-router-dom';
import { BellIcon } from '@heroicons/react/solid'; // Import the bell icon from Heroicons

function TopNav() {
  return (
      <nav className="flex items-center justify-between px-6 py-4 text-lg" style={{ height: '90px', backgroundColor: '#0076ce' }}>
        <div className="flex flex-col">
          <h1 className="text-white">DELL Technologies</h1>
          <h2 className="text-white text-sm">Onboarding</h2> 
        </div>
        <div className="space-x-6 flex justify-center flex-grow">
          <Link to="/admin" className="text-white">Admin</Link>
          <Link to="/hr" className="text-white">HR</Link>
          <Link to="/forumadmin" className="text-white">Forum</Link>
          <Link to="/faqadmin" className="text-white">FAQ</Link>
          <Link to="/scheduling" className="text-white">Scheduling</Link>
          <Link to="/helpdeskadmin" className="text-white">Helpdesk</Link> 
        </div>
        <div className="flex items-center space-x-4">
          <BellIcon className="w-8 h-8 text-white" /> 
        </div>
      </nav>
  );
}



export default TopNav;
