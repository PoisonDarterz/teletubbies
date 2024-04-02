import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Module1st2.module.css';

function Module2(){
    return (
        <div className={styles.background} >
            <Link to="/VRTour">
                <img src="/welcome_message.png" alt="Lamp" style={{ position: 'absolute', top: '160px', left: '580px', width: '400px' }}/>
                {/* <span className={styles.label} style={{ top: '860px', left: '900px', color:'#000' }}>Office<br></br>Tour</span> */}
            </Link>
            <Link to="/">
                <img src="/welcome_package.png" alt="Book" style={{ position: 'absolute', top: '580px', left: '850px', width: '250px' }}/>
                {/* <span className={styles.label} style={{ top: '120px', left: '700px' }}>Profile</span> */}
            </Link>
            <Link to="/">
                <img src="/document_vector.png" alt="Keyboard1" style={{ position: 'absolute', top: '425px', left: '1065px', width: '430px' }}/>
                {/* <span className={styles.label} style={{ top: '100px', left: '1670px' }}>Account<br></br>Set Up</span> */}
            </Link>
        </div>
    );
}

export default Module2;