import React from 'react';

function Word() {
  return (
    <div style={{ backgroundColor: '#E4ECFF', padding: '60px', width: '150%', marginLeft: '-250px', borderRadius: '10px' }}>
      <p style={{ color: '#1E1076', fontWeight: 'bold', textAlign: 'center' }}>09/04/2024</p>
      <p><span style={{ backgroundColor: '#D6FFCF', color: 'red', marginRight: '10px' }}>*</span>9.00am - 10.00am   Onboarding briefing (zoom)</p>
      <p style={{ marginBottom: '20px' }}>2.00pm - 4.00pm     Training on Job-specific Tasks and Processes</p>
      <p><b>Upcoming Events:</b></p>
      <p><span style={{ backgroundColor: '#F7FF97', marginRight: '10px' }}></span>16 April  - Department Dinner</p>
      <p><span style={{ backgroundColor: '#FFFA80', marginRight: '10px' }}></span>23 April - Department Meeting</p>
      <p><span style={{ backgroundColor: '#FEFFC6', marginRight: '10px' }}></span>29 April - Mentoring and Q&A Session</p>
    </div>
  );
}

export default Word;