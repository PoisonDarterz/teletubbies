import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './NewHireList.css'; 

function MyCalendar() {
    return (
      <div className="w-2/3">
        <div className="flex justify-start items-center mb-4">
          <h2 className="text-lg font-bold mr-4">April 2024</h2>
          <div>
            <button className="mr-2">&lt;</button>
            <button>&gt;</button>
          </div>
        </div>
        <Calendar
          value={new Date(2024, 3)}
          tileClassName={({ date, view }) => {
            if (view === 'month' && (date.getDate() === 16 || date.getDate() === 29)) {
              return 'bg-yellow-custom'; // Use custom class for dates 16 and 29
            }
            if (view === 'month' && date.getDate() === 23) {
              return 'bg-blue-custom'; // Use custom class for date 23
            }
          }}
        />
      </div>
    );
  }

  export default MyCalendar;