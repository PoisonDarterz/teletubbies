import React, { useState } from 'react';
import TopNav from '../module3/TopNav'; // Adjust the path as necessary

function Feedback() {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div>
      <TopNav />
      <h2 className="text-3xl font-bold mt-10 ml-10">Feedback</h2> {/* Add first line title here */}
      <h2 className="text-2xl font-semibold ml-10">Check out new hires’ s journey !</h2> {/* Add second line title here */}
      <div className="mx-10 pb-20">
        <h3 className="text-xl font mb-2 mt-10">Give your feedback on your onboarding month.</h3>
        <div className="bg-[#F6F1F1] rounded p-5 mb-5 h-40 overflow-auto" contentEditable>
          {/* rest of your code */}
        </div>
        <h3 className="text-xl font mb-2 mt-10">How would you rate your seniors? Why?</h3>
        <div className="flex items-center mb-5">
          <span className="text-[#EB4949]">Need to improve</span>
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              className={`mx-1 w-6 h-6 rounded-full ${rating >= value ? 'bg-blue-500' : 'bg-gray-300'}`}
              onClick={() => handleRating(value)}
            >
              {value}
            </button>
          ))}
          <span className="text-[#4EA326]">Excellent</span>
        </div>
        <div className="bg-[#F6F1F1] rounded p-5 mb-5 h-40 overflow-auto" contentEditable>
          {/* rest of your code */}
        </div>
        <h3 className="text-xl font mb-2 mt-10">What is your suggestion for future onboarding session ?</h3>
        <div className="bg-[#F6F1F1] rounded p-5 mb-5 h-40 overflow-auto" contentEditable>
          {/* rest of your code */}
        </div>
        <button className="bg-[#0076CE] text-[#FFFFFF] px-6 py-2 rounded float-right">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Feedback;