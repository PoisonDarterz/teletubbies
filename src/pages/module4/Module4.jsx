import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Module4.module.css'; // Import the CSS file

function Module4(){
    return (
        <div className={styles.background} >
            <Link to="/helpdesk">
                <img src="/Vector 15.png" alt="Coffee" style={{ position: 'absolute', top: '270px', left: '393px', width: '235px' }}/>
                <span className={styles.label} style={{ top: '280px', left: '330px' }}>Helpdesk</span>
            </Link>
            <Link to="/feedback">
                <img src="/Vector 16.png" alt="Monitor" style={{ position: 'absolute', top: '-5px', left: '693px', width: '445px' }}/>
                <span className={styles.label} style={{ top: '120px', left: '500px' }}>Feedback</span>
            </Link>
            <Link to="/goalsetting">
                <img src="/Vector 17.png" alt="Flower" style={{ position: 'absolute', top: '60px', left: '1160px', width: '175px' }}/>
                <span className={styles.label} style={{ top: '100px', left: '1290px' }}>Goalsetting</span>
            </Link>
            <Link to="/maze">
                <img src="/Vector 18.png" alt="CPU" style={{ position: 'absolute', top: '635px', left: '930px', width: '328px' }}/>
                <span className={styles.label} style={{ top: '780px', left: '1300px' }}>Return to<br></br>main map</span>
            </Link>
        </div>
    );
}

export default Module4;