import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 text-lg w-full" style={{ height: '90px', backgroundColor: '#0076ce' }}>
      <h1 className="text-white">DELL Technologies</h1>
      <div className="space-x-6">
        <Link to="/resource" className="text-white">ResourceHub</Link>
        <Link to="/training" className="text-white">Training</Link>
        <Link to="/testing" className="text-white">SkillTesting</Link>
      </div>
      <div className="flex items-center space-x-4">
      <img src="SamuelChan.jpg" alt="Profile" className="w-8 h-8 bg-white rounded-full" />
        <Link to="/station3" className="text-white">Map</Link>
      </div>
    </nav>
  );
}

export default Header;