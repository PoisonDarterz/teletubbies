import React from 'react';
import Header from './header';
import { Link } from 'react-router-dom'

function SampleProject() {
    return (
        <div>
        <Header />
        <div className="buttons-container mt-0 ml-4 flex">
        <Link to="/featured">
        <button className="button mr-2" style={{ backgroundColor: 'rgba(246, 241, 241, 0.27)', width: '179px', height: '60px' }}>Featured</button>
      </Link>
      <Link to="/sampleproject">
      <button className="button" style={{ backgroundColor: '#F6F1F1', width: '179px', height: '60px' }}>Sample Project</button>
      </Link>
      </div>
      <div className="flex justify-between space-x-4 w-full px-20 py-10 bg-[#F6F1F1]">
  {/* First Photo */}
  <div>
    <img src="/Chessgameip.png" alt="First Photo" className="w-[271px] h-[464px] border-4 rounded-lg overflow-hidden" />
    <button style={{backgroundColor: '#0076CE', width: '265px', height: '38px', borderRadius: '0.375rem'}} className="text-white mt-4">Chess Game</button>
  </div>

  {/* Second Photo */}
  <div>
    <img src="/FoodDeliveryAppip.png" alt="Second Photo" className="w-[271px] h-[464px] border-4 rounded-lg overflow-hidden" />
    <button style={{backgroundColor: '#0076CE', width: '265px', height: '38px', borderRadius: '0.375rem'}} className="text-white mt-4">Food Delivery App</button>
  </div>

  {/* Third Photo */}
  <div>
    <img src="/elearningip.png" alt="Third Photo" className="w-[271px] h-[464px] border-4 rounded-lg overflow-hidden" />
    <button style={{backgroundColor: '#0076CE', width: '265px', height: '38px', borderRadius: '0.375rem'}} className="text-white mt-4">e-Learning Platform</button>
  </div>
</div>
</div>      
);
    }
    
export default SampleProject;
