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
    <div>
      <div className="body-content">
        <div className="Resource">
          <header className="header">
            <h1>Training Resources Hub</h1>
          </header>
          <Header/>
          <main className="main-content">
            <div className="text-content">
              <h2>Training Resources Hub</h2>
              <p>
                Explore our Learning Center! Access vital training materials and documents 
                to kickstart your journey with us. 
                Everything you need to excel in your role, all in one place.
              </p>
            </div>
            <div className="image-content">
              <img src="/module2Photo.jpg" alt="Training Resources" />
            </div>
          </main>
        </div>
      </div>
  
      <div className="images-container">
        <div className="image-wrapper">
          <img src="/Developmentguide.jpg" alt="Developer Guide" />
          <div className="image-overlay">
            <p>Developer Guide</p>
          </div>
          <button onClick={() => handleDownload("Developmentguide")}>Download</button>
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
      </div>
    </div>
  );  
}

export default Resource;



