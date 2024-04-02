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
        <Link to="/forum" className="text-white">Forum</Link>
        <Link to="/faq" className="text-white">FAQ</Link>
        <Link to="/scheduling" className="text-white">Scheduling</Link>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 bg-white rounded-full"></div> {/* This is the profile icon. Replace it with your own icon. */}
        <Link to="/map" className="text-white">Map</Link>
      </div>
    </nav>
  );
}

export default TopNav;