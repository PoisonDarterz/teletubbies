import React from 'react';
import ThreeMaze from './ThreeMaze';
import './Maze.css';

function MazeApp() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Three Maze</h1>
            </header>
            <ThreeMaze />
        </div>
    );
}

export default MazeApp;
