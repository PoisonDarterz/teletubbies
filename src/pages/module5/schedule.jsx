import React from 'react';
import TopNav from './TopNav'; // replace './TopNav' with the actual path to your TopNav.jsx file
import Header2 from './header2'; // replace './header2' with the actual path to your Header2.jsx file
import MyCalendar from './calendar'; // replace './Calendar' with the actual path to your MyCalendar.jsx file
import Button from './button'; // replace './button' with the actual path to your button.jsx file
import Bottom from './bottom'; // replace './bottom' with the actual path to your bottom.jsx file
import Word from './word'; // replace './word' with the actual path to your word.jsx file

function Schedule() {
  return (
    <div>
      <TopNav />
      <Header2 />
      <div className="calendar-container" style={{ display: 'flex' }}>
        <div style={{ marginLeft: '20px', marginRight: '50px' }}> {/* Adjust the margins here */}
          <MyCalendar showButton={false} />
          <Button />
        </div>
        <Word />
      </div>
      <Bottom />
      {/* rest of your code */}
    </div>
  );
}

export default Schedule;