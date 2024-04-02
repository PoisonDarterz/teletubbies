import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 text-lg w-full" style={{ height: '90px', backgroundColor: '#0076ce' }}>
      <h1 className="text-white">DELL Technologies</h1>
      <div className="space-x-6">
        <Link to="/resource" className="text-white">Profile</Link>
        <Link to="/training" className="text-white">Account Setup</Link>
        <Link to="/GeneralInfo" className="text-white">Information</Link>
        <Link to="/scheduling" className="text-white">Office Tour</Link>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 bg-white rounded-full"></div> {/* This is the profile icon. Replace it with your own icon. */}
        <Link to="/map" className="text-white">Map</Link>
      </div>
    </nav>
  );
}

export default Header;