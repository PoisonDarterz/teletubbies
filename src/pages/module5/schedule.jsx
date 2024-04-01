import React from 'react';
import TopNav from './TopNav';
import Header2 from './header2';
import MyCalendar from './calendar';
import Button from './button';
import Bottom from './bottom';
import Word from './word';

function Schedule() {
  return (
    <div>
      <TopNav />
      <Header2 />
      <div className="flex">
        <div className="ml-5 mr-12">
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