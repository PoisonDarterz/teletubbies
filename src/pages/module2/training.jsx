import React from 'react';
import Header from './header';
import { Link } from 'react-router-dom'

function Training() {
  return (
    <div className="Training relative">
      <header className="header">
      </header>
      <Header/>
      <div className="buttons-container mt-0 ml-4 flex">
        <Link to="/featured">
      <button className="button mr-2" style={{ backgroundColor: '#F6F1F1', width: '179px', height: '60px' }}>Featured</button>
      </Link>
      <button className="button" style={{ backgroundColor: '#F6F1F1', width: '179px', height: '60px' }}>Sample Project</button>
      </div>
      <div className="content text-center mt-48">
      <div className="title font-poppins text-[60px] text-black">Software Engineering Training Hub</div>
      <div className="description font-potta one text-lg text-black">
  <span className="text-[#146C94]">Empowering</span> New Hires for <span className="text-[#146C94]">Success</span>
</div>
<button className="bg-[#0076CE] w-32 h-12 mt-4 rounded-md">Begin</button>
</div>
</div>
  );
}

export default Training;