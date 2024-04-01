import React from 'react';
import Header from './Header';
import TopNav from './TopNav';
import NewHireList from './newhirelist';
import MyCalendar from './calendar';
import PyChart from './pychart';

function Admin() {
  return (
    <div>
      <TopNav />
      <Header />
      <div className="flex">
        <NewHireList />
        <div className="flex-grow" />
        <div className="w-1/2">
          <MyCalendar />
        </div>
      </div>
      <PyChart />
      <h1>Admin</h1>
    </div>
  );
}

export default Admin;