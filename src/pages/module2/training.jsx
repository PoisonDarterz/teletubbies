import React from 'react';
import Header from './header';
import { Link, useNavigate } from 'react-router-dom';



function Training() {
  const navigate = useNavigate();

  return (
    <div className="Training relative">
      <div className="absolute inset-0 z-0" style={{ top: '100px', backgroundImage: 'url("/trainingggg.jpg")', backgroundSize: 'cover', opacity: 0.5, height: 'calc(100vh - 60px)' }}></div>
      <header className="header relative z-10">
      </header>
      <Header />
      <div className="buttons-container mt-0 ml-4 flex z-10 relative">
        <Link to="/featured">
          <button className="button mr-2" style={{ backgroundColor: '#F6F1F1', width: '179px', height: '60px' }}>Language</button>
        </Link>
        <Link to="/sampleproject">
          <button className="button mr-2" style={{ backgroundColor: '#F6F1F1', width: '179px', height: '60px' }}>Project Showcase</button>
        </Link>
        <Link to="/target">
          <button className="button" style={{ backgroundColor: '#F6F1F1', width: '179px', height: '60px' }}>Target</button>
        </Link>
      </div>
      <div className="content text-center mt-40 z-10 relative">
      <div className="title font-poppins text-[60px] text-black">Software Engineering Training Hub</div>
        <div className="description font-potta one text-lg text-black">
          <span className="text-[#146C94]">Empowering</span> New Hires for <span className="text-[#146C94]">Success</span>
        </div>
        <button className="bg-[#0076CE] w-32 h-12 mt-4 rounded-md" onClick={() => navigate('/featured')}>Begin</button>
      </div>
    </div>
  );
}

export default Training;