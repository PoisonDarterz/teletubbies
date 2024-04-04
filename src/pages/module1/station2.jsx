import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Module1st2.module.css';

function Module2(){
    return (
        <div className={styles.background} >
            <Link to="/VideoComponent">
                <img src="/welcome_message.png" alt="Lamp" style={{ position: 'absolute', top: '252px', left: '900px', width: '275px' }}/>
                <span className={styles.label} style={{ top: '340px', left: '960px', color:'#FFFFE0' }}>Welcome<br></br>Message</span>
            </Link>
            <Link to="/welcomepackage">
                <img src="/welcome_package.png" alt="Book" style={{ position: 'absolute', top: '615px', left: '450px', width: '380px' }}/>
                {/* <span className={styles.label} style={{ top: '120px', left: '700px' }}>Profile</span> */}
            </Link>
            <Link to="/Submission">
                <img src="/document_vector.png" alt="Keyboard1" style={{ position: 'absolute', top: '630px', left: '920px', width: '490px' }}/>
                {/* <span className={styles.label} style={{ top: '100px', left: '1670px' }}>Account<br></br>Set Up</span> */}
            </Link>
        </div>
        
    );
}

export default Module2;