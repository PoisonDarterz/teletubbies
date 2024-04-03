import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MazeApp = () => {
  const initialMaze = [
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0],
[0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0],
[0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0],
[0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0],
[0,1,1,2,1,1,1,1,1,1,1,3,1,1,0,1,1,1,1,1,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
[0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0],
[0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0],
[0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
[0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
[0,1,0,1,1,1,0,1,1,1,1,1,1,4,1,1,1,1,1,1,0],
[0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0],
[0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0],
[0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0],
[0,1,1,1,1,1,0,1,1,1,0,5,1,1,1,1,1,1,1,1,0],
[0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0],
[0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0],
[0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0],
[0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,6,1,1,1,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

  ]; // Your maze data

  const [maze, setMaze] = useState(initialMaze);
  const [playerPos, setPlayerPos] = useState(() => {
    // Try to get player position from localStorage
    const savedPos = localStorage.getItem('playerPos');
    if (savedPos) {
      return JSON.parse(savedPos);
    }
    // If not found in localStorage, return initial position
    return { x: 1, y: 1 };
  });

  function movePlayer(dx, dy) {
    const newPos = { x: playerPos.x + dx, y: playerPos.y + dy };

    // Check that newPos.y and newPos.x are within the bounds of the maze array
    if (
      newPos.y >= 0 &&
      newPos.y < maze.length &&
      newPos.x >= 0 &&
      newPos.x < maze[0].length &&
      maze[newPos.y][newPos.x] !== 0 // Assuming "1" is a wall or obstacle
    ) {
      setPlayerPos(newPos);
    }
  }

    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          movePlayer(-1, 0); // Move up
          break;
        case 'ArrowDown':
          movePlayer(1, 0); // Move down
          break;
        case 'ArrowLeft':
          movePlayer(0, -1); // Move left
          break;
        case 'ArrowRight':
          movePlayer(0, 1); // Move right
          break;
        default:
          break;
      }
    };
    useEffect(() => {

        localStorage.setItem('playerPos', JSON.stringify(playerPos));
      
        window.addEventListener('keydown', handleKeyDown);
      
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, [playerPos, handleKeyDown]);


  // Check if the player is on a specific cell (e.g., cell value is "2") and render Link component accordingly
  const isOnSpecificCell = [2, 3, 4, 5, 6].includes(maze[playerPos.y][playerPos.x]);

return (
<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#282c34' }}>
<h1 className="text-4xl font-bold text-white mb-4">Welcome, New Hire</h1> 
  <div style={{ display: 'flex', justifyContent: 'row', alignItems: 'center' }}>    {maze.map((row, y) => (
      <div key={y} style={{ display: 'flex', flexDirection: 'column' }}>
        {row.map((cell, x) => (
          <div
            key={`${x}-${y}`}
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: cell === 0 ? '#333' : 
              cell === 2 ? '#f00' : 
              cell === 3 ? '#0f0' : 
              cell === 4 ? '#00f' : 
              cell === 5 ? '#ff0' : 
              cell === 6 ? '#f0f' : '#fff',
              border: '1px solid #999',
              boxSizing: 'border-box',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {playerPos.x === x && playerPos.y === y && (
              <img src="/player.png" alt="player" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            )}
          </div>
        ))}
      </div>
    ))}

</div>
    {/* Render Link component based on the player's position */}
    {[...Array(5)].map((_, index) => {
      const stationNumber = index + 2; // This will give us numbers from 2 to 6
      return (
        isOnSpecificCell && maze[playerPos.y][playerPos.x] === stationNumber && (
          <Link 
    to={`/station${stationNumber - 1}`} // Subtract 1 from stationNumber
    style={{
        display: 'inline-block',
        backgroundColor: '#4CAF50', /* Green background */
        color: 'white', /* White text */
        padding: '14px 20px',
        margin: '8px 0',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        textDecoration: 'none', /* Remove underline */
        fontSize: '16px',
        transitionDuration: '0.4s',
        textAlign: 'center'
    }}
    onMouseOver={(e) => e.target.style.backgroundColor = "#45a049"} /* Darker green when mouse hovers over */
    onMouseOut={(e) => e.target.style.backgroundColor = "#4CAF50"} /* Return to original color when mouse is not hovering over */
>
            Redirect
          </Link>
        )
      );
    })}
  </div>
);
};

export default MazeApp;
