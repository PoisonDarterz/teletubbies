import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { Link } from 'react-router-dom';

function PyChart2() {
  return (
    <div className="w-2/3 mt-12 ml-8">
     <h2 className="text-center font-bold mb-4" style={{ fontSize: '1.2em' }}>New Hires Engagement Rates</h2>
      <div style={{ position: 'relative' }}>
        <PieChart
          data={[
            { title: 'Positive Feedback', value: 65, color: '#5CB2C5' },
            { title: 'Negative Feedback', value: 15, color: '#155B6B' },
          ]}
          className="h-72"
          lineWidth={50}
        />
        <img src="/image 6.png" alt="emoji" style={{ position: 'absolute', top: '26%', left: '20%', height: '10%' }} />
        <div style={{ position: 'absolute', top: '25%', left: '27%', backgroundColor: '#F3F3F3', padding: '10px', color: '#1CD571', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
          65%
        </div>
        <img src="/image 173.png" alt="emoji" style={{ position: 'absolute', top: '24%', right: '22%', height: '10%' }} />
        <div style={{ position: 'absolute', top: '22%', right: '30%', backgroundColor: '#F3F3F3', padding: '10px', color: '#DD0101', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
          15%
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}> 
        <div style={{ width: '50%' }}>
        <Link to="/engagement" style={{ fontWeight: 'bold', backgroundColor: '#C6E3FF', color: '#292F65', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px', textDecoration: 'none' }}>
         Check it out <span style={{ marginLeft: '10px', color: '#146c94' }}>→</span>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default PyChart2;