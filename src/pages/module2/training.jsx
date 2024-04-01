import React from 'react';
import Header from './header';
import './training.css';

function Training() {
    return (
      <div className="App">
        <header className="header">
        </header>
        <Header/>
        <div className="buttons-container">
          <button className="button">Featured</button>
          <button className="button">SAMPLE PROJECT</button>
        </div>
        <div className="content">
        <div className="title">Software Engineering Training Hub</div>
<div className="description">Empowering New Hires for Success</div>
        </div>
      </div>
    );
  }
  
  export default Training;