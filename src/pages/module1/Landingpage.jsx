import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Landingpage.css'; // Import the CSS file

function Module1(){
    return (
        <div className={styles.background} >
            <Link to="/forum">
                <img src="/officeTour_vector.png" alt="Lamp" style={{ position: 'absolute', top: '750px', left: '620px', width: '440px' }}/>
                <span className={styles.label} style={{ top: '860px', left: '900px', color:'#000' }}><br></br>Discussion</span>
            </Link>
            <Link to="/faq">
                <img src="/profile_vector.png" alt="Book" style={{ position: 'absolute', top: '60px', left: '273px', width: '460px' }}/>
                <span className={styles.label} style={{ top: '120px', left: '720px' }}>FAQs</span>
            </Link>
            <Link to="/">
                <img src="/accSetUp_vector.png" alt="Keyboard1" style={{ position: 'absolute', top: '100px', left: '1380px', width: '290px' }}/>
                <span className={styles.label} style={{ top: '100px', left: '1670px' }}>Scheduling</span>
            </Link>
            <Link to="/">
                <img src="/information_vector.png" alt="Coffee" style={{ position: 'absolute', top: '388px', left: '770px', width: '295px' }}/>
                <span className={styles.label} style={{ top: '450px', left: '790px' }}>Return to<br></br>main map</span>
            </Link>
        </div>
    );
}

export default Module1;