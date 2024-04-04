import React, { useState } from 'react';
import TopNav from './TopNav';

function HelpDesk() {
  const [selectedSeverity1, setSelectedSeverity1] = useState(0);
  const [selectedSeverity2, setSelectedSeverity2] = useState(0);

  const handleSeverityClick1 = (value) => {
    setSelectedSeverity1(value);
  };

  const handleSeverityClick2 = (value) => {
    setSelectedSeverity2(value);
  };

  return (
    <div>
      <TopNav />
      <div className="p-10">
        <h2 className="text-3xl font-bold mt-10 ml-10">Helpdesk</h2>
        <h2 className="text-2xl font ml-10">Reports? Issues? Let us know over here</h2>
        <div className="flex mt-10">
          <div className="w-2/3 pr-10">
            <h3 className="ml-10 mb-2 font-semibold">What is the issue you are facing?</h3>
            <div className="bg-[#F6F1F1] rounded ml-10 p-5 mb-5 h-32 overflow-auto" contentEditable />
            <h3 className="ml-10 mb-2">Severity of issue</h3>
            <div className="flex items-center ml-10">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  className={`mx-1 w-6 h-6 rounded-full ${selectedSeverity1 === value ? 'bg-[#0076CE]' : 'bg-[#D1D5DB]'}`}
                  onClick={() => handleSeverityClick1(value)}
                >
                  {value}
                </button>
              ))}
            </div>
            <br></br><br></br>
            <h3 className="ml-10 mb-2 font-semibold">Is there anything you want to report?</h3>
            <div className="bg-[#F6F1F1] rounded ml-10 p-5 mb-5 h-32 overflow-auto" contentEditable />
            <h3 className="ml-10">Urgency of issue</h3>
            <div className="flex items-center ml-10">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  className={`mx-1 w-6 h-6 rounded-full ${selectedSeverity2 === value ? 'bg-[#0076CE]' : 'bg-[#D1D5DB]'}`}
                  onClick={() => handleSeverityClick2(value)}
                >
                  {value}
                </button>
              ))}
              <br></br>
            </div>
            <br></br> <br></br>
            <button className="bg-[#0076CE] text-white px-4 py-2 rounded ml-10">Submit</button>
          </div>
          <div className="w-1/3 bg-[#E9F0FF] rounded p-5 h-100 overflow-auto">
            <div className="p-4 mb-4 bg-white rounded shadow">
              <h4 className="font-semibold text-lg mb-2">Ticket 1</h4>
              <p>My account is suspended for two days !</p>
              <div className="mt-2 text-sm text-gray-500">
                Submitted on: <span className="font-medium">2022-03-01</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                Status: <span className="font-medium text-green-500">Open</span>
              </div>
            </div>
            <div className="p-4 mb-4 bg-white rounded shadow">
              <h4 className="font-semibold text-lg mb-2">Ticket 2</h4>
              <p>Page load performance issue on the product listing page.</p>
              <div className="mt-2 text-sm text-gray-500">
                Submitted on: <span className="font-medium">2022-03-02</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                Status: <span className="font-medium text-red-500">Closed</span>
              </div>
            </div>
            <div className="p-4 mb-4 bg-white rounded shadow">
              <h4 className="font-semibold text-lg mb-2">Ticket 1</h4>
              <p>Issue with the login functionality.Unable to login to my account</p>
              <div className="mt-2 text-sm text-gray-500">
                Submitted on: <span className="font-medium">2022-03-01</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                Status: <span className="font-medium text-green-500">Open</span>
              </div>
            </div>
            <h4 className="font-semibold underline text-[#1776AB] text-right">More</h4>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HelpDesk;