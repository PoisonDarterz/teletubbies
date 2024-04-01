import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Module4.module.css'; // Import the CSS file

function Module4(){
    return (
        <div className={styles.background} >
            <Link to="/forum">
                <img src="/Vector 15.png" alt="Coffee" style={{ position: 'absolute', top: '270px', left: '393px', width: '235px' }}/>
                <span className={styles.label} style={{ top: '280px', left: '330px' }}>Helpdesk</span>
            </Link>
            <Link to="/faq">
                <img src="/Vector 16.png" alt="Monitor" style={{ position: 'absolute', top: '0px', left: '690px', width: '450px' }}/>
                <span className={styles.label} style={{ top: '120px', left: '720px' }}>FAQ</span>
            </Link>
            <Link to="/">
                <img src="/Vector 17.png" alt="Clock" style={{ position: 'absolute', top: '100px', left: '1380px', width: '290px' }}/>
                <span className={styles.label} style={{ top: '100px', left: '1670px' }}>Home</span>
            </Link>
            <Link to="/">
                <img src="/Vector 18.png" alt="Monitor" style={{ position: 'absolute', top: '588px', left: '770px', width: '295px' }}/>
                <span className={styles.label} style={{ top: '450px', left: '790px' }}>Feedback and<br></br>Helpdesk</span>
            </Link>
        </div>
    );
}

export default Module4;