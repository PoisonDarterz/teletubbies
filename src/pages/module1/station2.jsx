import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Module1st2.module.css';

function Module2(){
    return (
        <div className={styles.background} >
            <Link to="/VideoComponent">
                <img src="/welcome_message.png" alt="Lamp" style={{ position: 'absolute', top: '182px', left: '720px', width: '210px' }}/>
                {/* <span className={styles.label} style={{ top: '860px', left: '900px', color:'#000' }}>Office<br></br>Tour</span> */}
            </Link>
            <Link to="/">
                <img src="/welcome_package.png" alt="Book" style={{ position: 'absolute', top: '445px', left: '372px', width: '300px' }}/>
                {/* <span className={styles.label} style={{ top: '120px', left: '700px' }}>Profile</span> */}
            </Link>
            <Link to="/Submission">
                <img src="/document_vector.png" alt="Keyboard1" style={{ position: 'absolute', top: '450px', left: '740px', width: '400px' }}/>
                {/* <span className={styles.label} style={{ top: '100px', left: '1670px' }}>Account<br></br>Set Up</span> */}
            </Link>
        </div>
    );
}

export default Module2;