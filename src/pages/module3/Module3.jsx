import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Module3.module.css'; // Import the CSS file

function Module3(){
    return (
        <div className={styles.background} >
            <Link to="/forum">
                <img src="/Vector 11.png" alt="Keyboard" style={{ position: 'absolute', top: '750px', left: '620px', width: '440px' }}/>
                <span className={styles.label} style={{ top: '860px', left: '900px', color:'#000' }}>Forums and<br></br>Discussion</span>
            </Link>
            <Link to="/faq">
                <img src="/Vector 12.png" alt="Book" style={{ position: 'absolute', top: '60px', left: '273px', width: '460px' }}/>
                <span className={styles.label} style={{ top: '120px', left: '720px' }}>FAQs</span>
            </Link>
            <Link to="/">
                <img src="/Vector 13.png" alt="Clock" style={{ position: 'absolute', top: '100px', left: '1380px', width: '290px' }}/>
                <span className={styles.label} style={{ top: '100px', left: '1670px' }}>Scheduling</span>
            </Link>
            <Link to="/maze">
                <img src="/Vector 14.png" alt="Monitor" style={{ position: 'absolute', top: '388px', left: '770px', width: '295px' }}/>
                <span className={styles.label} style={{ top: '450px', left: '790px' }}>Return to<br></br>main map</span>
            </Link>
        </div>
    );
}

export default Module3;