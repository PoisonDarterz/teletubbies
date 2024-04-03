import React, { useEffect, useRef } from 'react';
import './VRTour.css';

function VRTour() {
  const imageContainerRef = useRef(null);
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/105/three.min.js';
    document.body.appendChild(script1);

    const initializePanolens = () => {
      const panoramaImage = new window.PANOLENS.ImagePanorama('/dell.jpeg');
      const viewer = new window.PANOLENS.Viewer({
        container: imageContainerRef.current,
        autoRotate: true,
        autoRotateSpeed: 0.3,
        controlBar: false,
      });
      viewer.add(panoramaImage);
    };

    script1.onload = () => {
      const script2 = document.createElement('script');
      script2.src = '/panolens.min.js';
      script2.onload = initializePanolens;
      document.body.appendChild(script2);
    };
  }, []);

  return (
    <div className="main-container">
      <div ref={imageContainerRef} className="image-container"></div>
    </div>
  );
}

export default VRTour;