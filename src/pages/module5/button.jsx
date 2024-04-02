import React from 'react';

function Button() {
  return (
    <div style={{ marginTop: '20px', marginBottom: '40px', marginLeft: '40px', marginRight: '20px' }}>
      <button style={{ backgroundColor: '#3A8BEA', color: '#FFFFFF', fontWeight: 'bold', padding: '10px', display: 'block', width: '60%', marginBottom: '10px' }}>
        Schedule a meeting
      </button>
      <button style={{ backgroundColor: '#66ACFF', color: '#FFFFFF', fontWeight: 'bold', padding: '10px', display: 'block', width: '60%' }}>
        One-to-One call
      </button>
    </div>
  );
}

export default Button;