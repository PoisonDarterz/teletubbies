import React from 'react';
import './simpleMaze.css';

const SimpleMaze = () => {
    const maze = [
        [0, 0, 3, 0, 0],
        [0, 0, 0, 0, 0],
        [4, 0, 0, 0, 5],
    ];

    const renderCell = (cell) => {
        switch(cell) {
            case 0: return <span style={{ padding: '5px' }}>Empty</span>;
            case 3: return <span style={{ padding: '5px' }}>Start</span>;
            case 4: return <span style={{ padding: '5px' }}>Wall</span>;
            case 5: return <span style={{ padding: '5px' }}>End</span>;
            default: return <span style={{ padding: '5px' }}>Unknown</span>;
        }
    };

    return (
        <div>
            {maze.map((row, i) => (
                <div key={i} className="maze-row">
                    {row.map((cell, j) => renderCell(cell))}
                </div>
            ))}
        </div>
    );
};

export default SimpleMaze;