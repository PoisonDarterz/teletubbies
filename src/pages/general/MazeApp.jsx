import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Maze from './Maze';

function MazeApp() {
  useEffect(() => {
    ReactGA.initialize('UA-57676020-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <Maze />
    </div>
  );
}

export default MazeApp;