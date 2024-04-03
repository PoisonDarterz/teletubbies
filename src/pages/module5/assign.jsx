import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import TopNav from './TopNav'; // Import the TopNav component
import Bottom from './bottom';

function Header2() {
  return (
    <div className="flex justify-around w-full bg-white p-5 shadow-md">
      <Link to="/schedule" className="text-[#8E8787] text-lg no-underline">Calendar</Link> {/* Customize this link */}
      <div className="text-gray-500 text-lg">Scheduled Events</div>
      <div className="text-gray-500 text-lg">Workflows</div>
      <Link to="/assign" className="text-[#337ACC] text-lg border-b-2 border-blue-600">Assigned Document</Link> {/* Customize this link */}
    </div>
    // rest of your code
  );
}

const AssignData = [
    { id: '#G0090', user: 'Welcome Letter', updated: '25/3/2024', category: 'General', title: 'Microsoft Word Document'},
    { id: '#Q0132', user: 'Employee Handbook', updated: '25/3/2024', category: 'General', title: 'Microsoft Word Document'},
    { id: '#G0089', user: 'Organizational Chart', updated: '14/3/2024', category: 'General', title: 'png' },
    { id: '#T0010', user: 'IT Security Policy', updated: '8/3/2024', category: 'Role Specific', title: 'pdf' },
    { id: '#G0088', user: 'Team Introduction & Collaboration Guide', updated: '6/3/2024', category: 'Role Specific', title: 'pdf' },
    { id: '#Q0131', user: 'Software Training Manual ', updated: '6/3/2024', category: 'Role Specific', title: 'pdf' },
  ];


function Assign() {
    return (
      <div>
        <TopNav />
        <Header2 />
        <div className="p-8">
        <div className="flex justify-between items-center mt-8 mb-4">
      
       
      </div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <label className="mr-2">Filters: Categorised  by::</label>
          <input type="text" className="border p-1 rounded" />
          <label className="ml-4 mr-2">Date assigned:</label>
          <input type="date" className="border p-1 rounded" />
        </div>
        <input type="text" className="border p-1 rounded" placeholder="Search" />
      </div>
          <div className="overflow-x-auto mt-6 p-4">
          <table className="w-4/5 mx-auto text-center">
              <thead>
              <tr className="text-sm font-medium text-left text-gray-700 rounded-lg">
                <th className="w-[15%] px-4 py-2 bg-gray-200">Status</th>
                <th className="w-[15%] px-4 py-2 bg-gray-200">Document name</th>
                <th className="w-[15%] px-4 py-2 bg-gray-200">Last Updated</th>
                <th className="w-[15%] px-4 py-2 bg-gray-200">Category</th>
                <th className="w-[30%] px-4 py-2 bg-gray-200">Type</th>
                
            </tr>
              </thead>
              <tbody className="text-sm font-normal text-gray-700">
                {AssignData.map((data, i) => (
                  <tr className={`${i % 2 === 0 ? 'bg-[#fefefe]' : 'bg-[#f7f6fe]'} px-4 py-2`}>
                    <td className="w-[15%] px-4 py-4">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${[1, 2, 3, 5].includes(i + 1) ? 'bg-[#ACE8C4]' : 'bg-[#D9D9D9]'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={`${[1, 2, 3, 5].includes(i + 1) ? '#2F6E57' : '#9F9F9F'}`} className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </td>
                    <td className="w-[15%] px-4 py-4">{data.user}</td>
                    <td className="w-[15%] px-4 py-4">{data.updated}</td>
                <td className="w-[15%] px-4 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${data.category === 'General' ? 'text-[#1F9254] bg-[#EBF9F1]' :
                      data.category === 'Role Specific' ? 'text-[#CD6200] bg-[#FEF2E5]' :
                        'text-[#A30D11] bg-[#FBE7E8]'
                    }`}>
                    {data.category}
                  </span>
                </td>
                <td className="w-[30%] px-4 py-4">{data.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-center items-center mt-10">
          <button className="px-4 py-2 text-sm text-white bg-gray-500 rounded">Previous</button>
          <button className="px-4 py-2 ml-2 text-sm text-white bg-indigo-700 rounded">1</button>
          <button className="px-4 py-2 ml-2 text-sm text-black bg-gray-300 rounded">2</button>
          <button className="px-4 py-2 ml-2 text-sm text-black bg-gray-300 rounded">3</button>
          <button className="px-4 py-2 ml-2 text-sm text-white bg-gray-500 rounded">Next</button>
        </div>
        </div>
        <div className="fixed inset-x-0 bottom-0">
          </div>
          </div>

  

    </div>
    );
  }



export default Assign;