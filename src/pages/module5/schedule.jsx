import React from 'react';
import TopNav from './TopNav'; // replace './TopNav' with the actual path to your TopNav.jsx file
import Header2 from './header2'; // replace './header2' with the actual path to your Header2.jsx file
import MyCalendar from './calendar'; // replace './Calendar' with the actual path to your MyCalendar.jsx file

function Schedule() {
  return (
    <div>
      <TopNav />
      <Header2 />
      <div className="calendar-container">
        <MyCalendar showButton={false} />
      </div>
      {/* rest of your code */}
    </div>
  );
}

export default Schedule;