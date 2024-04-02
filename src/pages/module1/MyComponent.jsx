import React from 'react';
import * as PANOLENS from 'panolens';
import './vr.css';
import * as THREE from 'three';
window.THREE = THREE;

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.imageContainer = React.createRef();
    this.viewer = null; // Initialize viewer as null
  }

  componentDidMount() {
    console.log('Component mounted');
    const panoramaImage = new PANOLENS.ImagePanorama("/scenery.jpeg");
    console.log('Panorama image created:', panoramaImage);
  
    // Check if imageContainer ref exists
    if (this.imageContainer.current) {
      this.viewer = new PANOLENS.Viewer({
        container: this.imageContainer.current,
        autoRotate: true,
        autoRotateSpeed: 0.3,
        controlBar: false,
      });
  
      panoramaImage.addEventListener('load', () => {
        this.viewer.add(panoramaImage);
      });
    } else {
      console.error('Image container ref is not available.');
    }
  }
  

  componentWillUnmount() {
    if (this.viewer) {
      this.viewer.destroy();
    }
  }

  render() {
    return (
      <div className="main-container">
        <h1>Hi, Welcome</h1>
        <div ref={this.imageContainer} className="image-container"></div>
      </div>
    );
  }
}

export default MyComponent;
