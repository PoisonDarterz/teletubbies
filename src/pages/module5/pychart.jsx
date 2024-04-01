import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { Link } from 'react-router-dom';

function PyChart() {
  return (
    <div className="w-1/2 mt-12">
      <h2 className="text-center font-bold">New Hires Engagement Rates</h2>
      <div style={{ position: 'relative' }}>
        <PieChart
          data={[
            { title: 'Positive Feedback', value: 65, color: '#5CB2C5' },
            { title: 'Negative Feedback', value: 15, color: '#155B6B' },
          ]}
          className="h-72"
          lineWidth={50} // Set the line width to control the thickness of the ring
        />
        <img src="/image 6.png" alt="emoji" style={{ position: 'absolute', top: '22%', left: '-4%', height: '10%' }} />
        <div style={{ position: 'absolute', top: '20%', left: '8%', backgroundColor: '#F3F3F3', padding: '10px', color: '#1CD571', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
          65%
        </div>
        <img src="/image 173.png" alt="emoji" style={{ position: 'absolute', top: '30%', right: '-10%', height: '10%' }} />
        <div style={{ position: 'absolute', top: '28%', right: '2%', backgroundColor: '#F3F3F3', padding: '10px', color: '#DD0101', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
          15%
        </div>
      </div>
      <Link to="/engagement" style={{ backgroundColor: '#C6E3FF', color: '#292F65', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px', marginTop: '10px', textDecoration: 'none' }}>
        Check it out <span style={{ marginLeft: '10px', color: '#146c94' }}>→</span>
      </Link>
    </div>
  );
}

export default PyChart;