import React from 'react';
import Header from './header';

function Resource2() {
  const handleDownload = (imageName) => {
    // Encode the image name and construct the image path
    const imagePath = `http://localhost:3000/${imageName}.jpg`;
    // Create a temporary anchor element
    const anchor = document.createElement('a');
    // Set the anchor href attribute image path
    anchor.href = imagePath;
    // Set the anchor's download attribute to force download
    anchor.download = `${imageName}.jpeg`;
    // Simulate a click on the anchor element
    anchor.click();
    // Remove the anchor element
    anchor.remove();
  };

  return (
    <div className="flex flex-col items-center bg-blue-500 font-sans overflow-x-hidden overflow-y-auto" style={{ position: 'relative' }}>
      <img src="/module2Photo.jpg" alt="Training Resources" style={{ position: 'absolute', top: 0, left: 0, height: '100vh', width: '100%', zIndex: -1 }} />
      <Header />
      <main className="flex justify-between items-start w-full" style={{ backgroundColor: '#0076CE', zIndex: 1 }}>
        <div className="flex-1 pr-5 text-white w-2/3 mx-auto overflow-hidden">
          <h2 className="text-7xl font-semibold mb-20 mt-20 ml-20">Training<br></br>Resource Hub</h2>
          <p className="text-lg ml-20">
            Explore our Learning Center! Access vital training materials and documents
            to kickstart your journey with us.
            Everything you need to excel in your role, all in one place.
          </p>
        </div>
        <div className="flex-1">
          <img src="/module2Photo.jpg" alt="Training Resources" className="ml-auto" style={{ height: '500px', width: '500px' }} />
        </div>
      </main>
      <div className="images-container flex w-full h-[400px]" style={{ backgroundColor: '#F6F1F1', zIndex: 1 }}>
        <div className="image-wrapper flex-1 relative flex flex-col items-center justify-center">
          <div className="relative">
            <img src="/Development guide.jpg" alt="Developer Guide" className="h-[300px] mx-2" />
            <div className="image-overlay absolute bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
              <p>Developer Guide</p>
            </div>
          </div>
          <button onClick={() => handleDownload("Developmentguide")} className="font-bold underline">Download</button>
        </div>
        <div className="image-wrapper flex-1 relative flex flex-col items-center justify-center">
          <div className="relative">
            <img src="/Development standard.jpg" alt="Development Standard" className="h-[300px] mx-2" />
            <div className="image-overlay absolute bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
              <p>Development Standard</p>
            </div>
          </div>
          <button onClick={() => handleDownload("Developmentstandard")} className="font-bold underline">Download</button>
        </div>
        <div className="image-wrapper flex-1 relative flex flex-col items-center justify-center">
          <div className="relative">
            <img src="/Training agenda.jpg" alt="Training Agenda" className="h-[300px] mx-2" />
            <div className="image-overlay absolute bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
              <p>Training Agenda</p>
            </div>
          </div>
          <button onClick={() => handleDownload("Trainingagenda")} className="font-bold underline">Download</button>
        </div>
      </div>
    </div>
  );
}

export default Resource2;