import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

function Header2() {
  return (
    <div>
      <div className="flex justify-around w-full bg-white p-5 shadow-md">
      <Link to="/schedule" className="text-blue-500 text-lg border-b-2 border-blue-600">Calendar</Link> 
        <div className="text-gray-500 text-lg">Scheduled Events</div>
        <div className="text-gray-500 text-lg">Workflows</div>
        <Link to="/assign" className="text-gray-500 text-lg">Assigned Document</Link> {/* Make this text clickable */}
      </div>
      <div className="text-black text-3xl mt-16 pl-12 pr-5 font-bold">Your schedule</div>
      <div className="text-black text-xl pl-12 pr-5 font-semibold">Schedule meetups with your new hires!</div>
    </div>
  );
}

export default Header2;