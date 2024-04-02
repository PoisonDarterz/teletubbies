import React from 'react';
// import { createRoot } from 'react-dom/client';
import MyComponent from './MyComponent'; // Assuming MyComponent is in the same directory

function VRScene() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

// const root = createRoot(document.getElementById('root'));
// root.render(<VRScene />);

export default VRScene;
