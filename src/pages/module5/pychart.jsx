import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

function PyChart() {
  return (
    <div style={{ width: '33%', marginTop: '50px' }}>
      <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>New Hires Engagement Rates</h2>
      <PieChart
        data={[
          { title: 'Positive Feedback', value: 65, color: '#5CB2C5' },
          { title: 'Negative Feedback', value: 15, color: '#155B6B' },
        ]}
        style={{ height: '300px' }}
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