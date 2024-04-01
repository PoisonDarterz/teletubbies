import React from 'react';

function Header2() {
  return (
    <div>
      <div className="flex justify-around w-full bg-white p-5 shadow-md">
        <div className="text-gray-500 text-lg border-b-2 border-blue-600">Calendar</div>
        <div className="text-gray-500 text-lg">Scheduled Events</div>
        <div className="text-gray-500 text-lg">Workflows</div>
        <div className="text-gray-500 text-lg">Assigned Document</div>
      </div>
      <div className="text-black text-3xl mt-16 pl-12 pr-5 font-bold">Your schedule</div>
      <div className="text-black text-xl pl-12 pr-5 font-semibold">Schedule meetups with your new hires!</div>
    </div>
  );
}

export default Header2;