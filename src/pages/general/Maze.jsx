import React from 'react';
import './assets/css/styles.css';

class Maze extends React.Component {
  componentDidMount() {
    // Place your JavaScript code here, or import it from another file
  }

  render() {
    return (
      <div className="three">
        <div className="button-wrapper">
          <button className="generate">
            Rebuild maze
          </button>
        </div>
      </div>
    );
  }
}

export default Maze;