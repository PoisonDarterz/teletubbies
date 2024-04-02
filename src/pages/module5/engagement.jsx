import React from 'react';
import TopNav from './TopNav';
import { PieChart } from 'react-minimal-pie-chart';

const chartData = [
  { title: 'Positive', value: 65, color: '#6BD096' },
  { title: 'Neutral', value: 20, color: '#F69E66' },
  { title: 'Negative', value: 15, color: '#F78A8F' },
];

function Engagement() {
  return (
    <div className="p-4">
      <div className="mt-[-16px] ml-[-16px] mr-[-16px]">
        <TopNav />
      </div>
      <br></br>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">New Hire's Engagement Rates</h1>
          <p className="mt-2">Understanding Employee Sentiment Through AI Analysis</p>
        </div>
        <div className="text-gray-500 text-right">
          <p>Batch 1 Session 24/25</p>
          <p>7 April - 5 May</p>
        </div>
      </div>

      <div className="mt-16 mx-auto max-w-[40%] h-[300px] flex justify-between">
        <PieChart
          data={chartData}
          totalValue={100}
          lineWidth={20}
          rounded
          startAngle={45}
          lengthAngle={-270}
          paddingAngle={25}
        />
        <div className="ml-4">
          {chartData.map((item, i) => (
            <p key={i}><span className={`font-bold`} style={{ color: item.color }}>■</span> {item.title}: {item.value}%</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Engagement;