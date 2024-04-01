import React from 'react';

function Bottom() {
  return (
    <div style={{ backgroundColor: '#D9D9D9', width: '100%', padding: '20px 0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <p style={{ color: '#939393', fontSize: '23px', fontFamily: 'Poppins', marginLeft: '87px' }}>
          Dell Technologies <span style={{ marginLeft: '80px' }}>Dell Premier</span>
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-around', color: '#939393', width: '100%' }}>
          <p>Copyright @ 2024 Dell inc</p>
          <p>Term of Sale</p>
          <p>Privacy Statement</p>
          <p>Legal and Regulatory</p>
          <p>Accessibility</p>
        </div>
      </div>
    </div>
  );
}

export default Bottom;