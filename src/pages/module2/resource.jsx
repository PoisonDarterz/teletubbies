import React from 'react';
import Header from './header';
import './resource.css';

function Resource() {
  const handleDownload = (imageName) => {
    // Construct the image path based on the image name
    const imagePath = `http://localhost:3000/${imageName}.jpg`;
    // Create a temporary anchor element
    const anchor = document.createElement('a');
    // Set the anchor's href attribute to the image path
    anchor.href = imagePath;
    // Set the anchor's download attribute to force download
    anchor.download = imageName;
    // Simulate a click on the anchor element
    anchor.click();
    // Remove the anchor element
    anchor.remove();
  };

  return (
    <div className="flex flex-col h-screen bg-[#0076CE] text-white">
      <header className="p-5">
        <h1 className="text-4xl">Training Resources Hub</h1>
      </header>
      <Header/>
      <main className="flex flex-grow p-5 space-x-5">
        <div className="flex-1 space-y-5 max-w-xl mx-auto overflow-hidden">
          <h2 className="text-4xl font-semibold">Explore our Learning Center!</h2>
          <p className="text-lg">
            Access vital training materials and documents to kickstart your journey with us. Everything you need to excel in your role, all in one place.
          </p>
        </div>
        <div className="image-content">
          <img src="/module2Photo.jpg" alt="Training Resources" />
        </div>
        <div className="image-wrapper">
          <img src="/Developmentstandard.jpg" alt="Development Standard" />
          <div className="image-overlay">
            <p>Development Standard</p>
          </div>
          <button onClick={() => handleDownload("Developmentstandard")}>Download</button>
        </div>
        <div className="image-wrapper">
          <img src="/Trainingagenda.jpg" alt="Training Agenda" />
          <div className="image-overlay">
            <p>Training Agenda</p>
          </div>
          <button onClick={() => handleDownload("Trainingagenda")}>Download</button>
        </div>
      </main>
    </div>
  );
  }  

export default Resource;



