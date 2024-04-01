import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

function PyChart() {
  return (
    <div className="w-1/2 mt-12">
      <h2 className="text-center font-bold">New Hires Engagement Rates</h2>
      <PieChart
        data={[
          { title: 'Positive Feedback', value: 65, color: '#5CB2C5' },
          { title: 'Negative Feedback', value: 15, color: '#155B6B' },
        ]}
        className="=h-72"
        lineWidth={50} // Set the line width to control the thickness of the ring
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ backgroundColor: '#F3F3F3', padding: '10px', color: '#1CD571' }}>65%</div>
        <div style={{ backgroundColor: '#F3F3F3', padding: '10px', color: '#DD0101' }}>15%</div>
      </div>
    </div>
  );
}

export default PyChart;