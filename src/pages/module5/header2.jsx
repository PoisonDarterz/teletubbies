import React from 'react';
import './header2.css'; // replace './header2.css' with the actual path to your CSS file

function Header2() {
  return (
    <div>
      <div className="header">
        <div className="title active">Calendar</div>
        <div className="title">Scheduled Events</div>
        <div className="title">Workflows</div>
        <div className="title">Assigned Document</div>
      </div>
      <div className="title1">Your schedule</div>
      <div className="title2">Schedule meetups with your new hires!</div>
    </div>
  );
}

export default Header2;