import React from 'react';
import Header from './Header';
import TopNav from './TopNav';
import NewHireList from './newhirelist';
import MyCalendar from './calendar';
import PyChart from './pychart';
import Bottom from './bottom';

function Admin() {
  return (
    <div>
      <TopNav />
      <Header />
      <div className="flex w-full">
        <div className="w-2/5">
          <NewHireList />
        </div>
        <div className="ml-auto mt-16 w-1/3 flex flex-col">
          <MyCalendar />
          <PyChart />
        </div>
      </div>
      <h1>Admin</h1>
      <Bottom /> {/* Use Bottom */}
    </div>
  );
}

export default Admin;