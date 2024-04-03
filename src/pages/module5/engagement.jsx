import React, { useEffect, useState } from 'react';
import TopNav from './TopNav';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { PieChart } from 'react-minimal-pie-chart';


function Engagement() {
  axios.get('http://localhost:5000/api/data')
  const [topWords, setTopWords] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:5000/api/top_words')
      .then(response => {
        setTopWords(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  const [topSuggestions, setTopSuggestions] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:5000/api/top_suggestions')
      .then(response => {
        setTopSuggestions(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/feedback_analysis')
      .then(response => {
        const data = response.data;
        const chartData = [
          { title: 'Positive', value: data.Positive, color: '#6BD096' },
          { title: 'Neutral', value: data.Neutral, color: '#F69E66' },
          { title: 'Negative', value: data.Negative, color: '#F78A8F' },
        ];
        setChartData(chartData);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="px-8 py-4">
      <div className="mt-[-16px] ml-[-32px] mr-[-32px]">
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
            <p key={i}><span className={`font-bold`} style={{ color: item.color }}>■</span> {item.title}: {item.value.toFixed(2)}%</p>
          ))}
        </div>
      </div>
      <div className="mt-4 px-16 py-8">
        <h2 className="text-xl">AI-generated Analysis</h2>
        <br></br>
        <h3 className="text-l italic">Top Words in Employee's Feedback</h3>
        {topWords && Object.entries(topWords).map(([topic, words], i) => (
          <div key={i}>
            <p>{topic}: {words.join(', ')}</p>
          </div>
        ))}
        <br></br>
        <h3 className="text-l italic">Suggestions to Improve Onboarding</h3>
        {topSuggestions && Object.entries(topSuggestions).map(([cluster, data], i) => (
          <div key={i}>
            <ReactMarkdown>{data.summary}</ReactMarkdown>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Engagement;