import React from 'react';

import './resource.css';

function Resource() {
  return (
    <div className="Resource">
      <header className="header">
        <h1>Training Resources Hub</h1>
      </header>
      <main className="main-content">
        <div className="text-content">
          <h2>Explore our Learning Center!</h2>
          <p>
            Access vital training materials and documents to kickstart your journey with us. Everything you need to excel in your role, all in one place.
          </p>
        </div>
        <div className="image-content">
          <img src="url('/module2Photo.jpg')" alt="Training Resources" />
        </div>
      </main>
    </div>
  );
}

export default Resource;

