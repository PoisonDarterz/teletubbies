import React from 'react';

function Bottom() {
  return (
    <div style={{ backgroundColor: '#D9D9D9', width: '100%', padding: '20px 0', textAlign: 'center' }}>
      <p style={{ color: '#939393', fontSize: '23px', fontFamily: 'Poppins', textAlign: 'left' }}>
  Dell Technologies <span style={{ marginLeft: '20px' }}>Dell Premier</span>
    </p>
      <div style={{ display: 'flex', justifyContent: 'space-around', color: '#939393' }}>
        <p>Copy right @ 2024 Dell inc</p>
        <p>Term of Sale</p>
        <p>Privacy Statement</p>
        <p>Legal and Regulatory</p>
        <p>Accessibility</p>
      </div>
    </div>
  );
}

export default Bottom;