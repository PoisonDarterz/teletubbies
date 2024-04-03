import React, { useState } from 'react';
import Popup from './popup'; // replace './Popup' with the correct path to Popup

function Button() {
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = () => {
        setShowPopup(true);
    };

    const handleClose = () => {
        setShowPopup(false);
    };

    return (
        <div style={{ marginTop: '20px', marginBottom: '40px', marginLeft: '40px', marginRight: '20px' }}>
            <button 
                style={{ backgroundColor: '#3A8BEA', color: '#FFFFFF', fontWeight: 'bold', padding: '10px', display: 'block', width: '60%', marginBottom: '10px' }}
                onClick={handleClick}
            >
                Schedule a meeting
            </button>
            <button style={{ backgroundColor: '#66ACFF', color: '#FFFFFF', fontWeight: 'bold', padding: '10px', display: 'block', width: '60%' }}>
                One-to-One call
            </button>
            {showPopup && <Popup onClose={handleClose} />}
        </div>
    );
}

export default Button;