import React from 'react';
import TopNav from './TopNav';
import Header from './Header';
import NewHireList from './newhirelist';
import MyCalendar from './calendar';
import PyChart from './pychart';
import Bottom from './bottom';
import { Link } from 'react-router-dom';

function Admin() {
  return (
    <div>
      <TopNav />
      <Header title="Software Engineering Department" /> {/* Pass the title prop here */}
      <div className="flex w-full" style={{ marginBottom: '20px' }}>
        <div className="w-2/5">
          <NewHireList />
        </div>
        <div className="ml-auto mt-16 w-1/3 flex flex-col">
          <MyCalendar />
          <Link to="/schedule" style={{ backgroundColor: '#BADEE6', color: '#292F65', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px', marginTop: '10px', textDecoration: 'none' }}>
          Check your calendar <span style={{ marginLeft: '10px', color: '#146c94' }}>→</span>
          </Link>
          <PyChart />
        </div>
      </div>
      <Bottom /> {/* Use Bottom */}
    </div>
  );
}

export default Admin;