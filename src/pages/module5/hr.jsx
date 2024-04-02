import React from 'react';
import TopNav from './TopNav';
import Header from './Header';
import PyChart2 from './pychart2';
import ProgressBar from './progressbar'; // Import the ProgressBar component
import Bottom from './bottom'; // Import the Bottom component

function HR() {
    const hires = [
        { name: 'Henry Tan Yin Yi', image: '/Ellipse 51.png' },
        { name: 'Ali bin Muhammad Hassan', image: '/Ellipse 53.png' },
        { name: 'Samuel Chan', image: '/Ellipse 52.png' },
        { name: 'Jennie Liew Mei Yin', image: '/Ellipse 54.png' },
        { name: 'Kugan a/l Krishnan', image: '/Ellipse 55.png' },
      ];

  return (
    <div>
      <TopNav />
      <Header title="Human Resource Department" />
      <div className="flex m-4"> {/* Add flex here */}
        <div style={{ marginRight: '5px', width: '50%' }}> {/* Add marginRight and width here */}
          <PyChart2 />
        </div>
        <div style={{ marginTop: '40px', marginLeft: '20px', marginRight: '80px', width: '50%' }}> {/* Add marginTop here */}
          <h2 className="text-2.9xl font-bold text-[#13114C] mb-4 flex items-center justify-center"> {/* Add title here */}
            Onboarding Progress Tracking
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </h2>
          <ProgressBar hires={hires} />
          <a href="/email" className="text-lg font-semibold underline text-right block mt-4">More</a> {/* Add More link here */}
        </div>
      </div>
      <div style={{ marginTop: '40px' }}> {/* Add margin-top here */}
        <Bottom /> {/* Include the Bottom component */}
      </div>
      {/* rest of your code */}
    </div>
  );
}

export default HR;