import React from 'react';
import Header from './header';

function Resource2() {
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
        <div className="flex flex-col items-center bg-blue-500 font-sans overflow-x-hidden overflow-y-auto">
            <div className="text-center bg-blue-500 text-white p-5">
                <h1 className="text-2xl font-bold">Training Resources Hub</h1>
            </div>
            <Header />
            <main className="flex justify-between items-start w-full ml-20">
                <div className="flex-1 pr-5 text-white w-2/3 mx-auto overflow-hidden">
                    <h2 className="text-7xl font-semibold mb-20 mt-40">Training Resources Hub</h2>
                    <p className="text-lg">
                        Explore our Learning Center! Access vital training materials and documents
                        to kickstart your journey with us.
                        Everything you need to excel in your role, all in one place.
                    </p>
                </div>
                <div className="flex-1">
                    <img src="/module2Photo.jpg" alt="Training Resources" className="h-full ml-auto" />
                </div>
            </main>
            <div className="absolute left-0 bottom-0 w-full flex justify-evenly p-5">
                <div className="relative flex flex-col items-center justify-center text-center">
                    <img src="/Developmentguide.jpg" alt="Developer Guide" className="w-205 h-282" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <p className="text-white">Developer Guide</p>
                    </div>
                    <button onClick={() => handleDownload("Developmentguide")} className="mt-2 px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white">Download</button>
                </div>
                <div className="relative flex flex-col items-center justify-center text-center">
                    <img src="/Developmentstandard.jpg" alt="Development Standard" className="w-205 h-282" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <p className="text-white">Development Standard</p>
                    </div>
                    <button onClick={() => handleDownload("Developmentstandard")} className="mt-2 px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white">Download</button>
                </div>
            </div>
        </div>
    );
}

export default Resource2;