import React from 'react';
import TopNav from './TopNav'; // Import the TopNav component
import ViewProgress from './viewprogress'; // Import the ViewProgress component
import Bottom from './bottom'; // Import the Bottom component

function Email() {
  return (
    <div>
      <TopNav />
      <h2 className="text-3xl font-bold mt-10 ml-10">Onboarding Tracking Progress</h2> {/* Add first line title here */}
      <h2 className="text-2xl font-semibold ml-10">Check out new hires’ s journey !</h2> {/* Add second line title here */}
      <ViewProgress /> 
      <div className="h-40"></div> {/* Add a space here */}
      <Bottom />  
      {/* rest of your code */}
    </div>
  );
}

export default Email;