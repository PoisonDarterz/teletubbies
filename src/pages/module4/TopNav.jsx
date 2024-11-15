import React from 'react';
import { Link } from 'react-router-dom';

function TopNav() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 text-lg" style={{ height: '90px', backgroundColor: '#0076ce' }}>
        <div className="flex flex-col">
          <h1 className="text-white">DELL Technologies</h1>
          <h2 className="text-white text-sm">Onboarding</h2> 
        </div>
      <div className="space-x-6">
        <Link to="/feedback" className="text-white">Feedback</Link>
        <Link to="/helpdesk" className="text-white">Helpdesk</Link>
        <Link to="/goal" className="text-white">Goalsetting</Link>
      </div>
      <div className="flex items-center space-x-4">
      <img src="SamuelChan.jpg" alt="Profile" className="w-8 h-8 bg-white rounded-full" />
        <Link to="/station5" className="text-white">Map</Link>
      </div>
    </nav>
  );
}

export default TopNav;