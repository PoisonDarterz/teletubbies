import React from 'react';
import './Header.css'; // Assuming you have a CSS file for styles

function Header() {
    return (
        <div className="header">
            <img src="/Rectangle 38.png" alt="Your Description" style={{ width: '100%', height: 'auto' }} />
            <div className="welcome-section">
                <h1 className="welcome-text">Welcome back!</h1>
                <h2 className="department-text">Software Engineering Department</h2>
            </div>
            <div className="profile-info">
                <img src="/Ellipse 1.png" alt="Profile" className="profile-pic" />
                <p className="profile-name">Michael Lim</p>
            </div>
        </div>
    );
}

export default Header;