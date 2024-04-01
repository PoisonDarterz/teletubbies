import React from 'react';

function Word() {
  return (
    <div className="bg-blue-100 p-16 w-3/4 ml-auto mr-auto rounded-lg">
      <p className="text-blue-900 font-bold text-center">09/04/2024</p>
      <p className="flex items-center"><span className="bg-green-100 text-red-500 mr-2 p-1">*</span>9.00am - 10.00am   Onboarding briefing (zoom)</p>
      <p className="mb-5">2.00pm - 4.00pm     Training on Job-specific Tasks and Processes</p>
      <p className="font-bold">Upcoming Events:</p>
      <p className="flex items-center"><span className="bg-yellow-200 mr-2 p-1"></span>16 April  - Department Dinner</p>
      <p className="flex items-center"><span className="bg-yellow-100 mr-2 p-1"></span>23 April - Department Meeting</p>
      <p className="flex items-center"><span className="bg-yellow-50 mr-2 p-1"></span>29 April - Mentoring and Q&A Session</p>
    </div>
  );
}

export default Word;