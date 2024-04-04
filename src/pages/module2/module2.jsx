import React from 'react';
import { Link } from 'react-router-dom';
import styles from './module2.module.css'; // Import the CSS file

function Module2(){
    return (
        <div className={styles.background} >
            <Link to="/resource">
                <img src="/Vector 3.png" alt="Globe" style={{ position: 'absolute', top: '280px', left: '500px', width: '320px' }}/>
                <span className={styles.label} style={{ top: '720px', left: '600px' }}>Essential<br></br>Documents</span>
            </Link>
            <Link to="/testing">
                <img src="/Vector 4.png" alt="Shelf" style={{ position: 'absolute', top: '200px', left: '1450px', width: '470px' }}/>
                <span className={styles.label} style={{ top: '120px', left: '1650px' }}>Test Your<br></br>Knowledge</span>
            </Link>
            <Link to="/training">
                <img src="/Vector 5.png" alt="Monitor" style={{ position: 'absolute', top: '430px', left: '1060px', width: '430px' }}/>
                <span className={styles.label} style={{ top: '530px', left: '1490px' }}>Training<br></br>Session</span>
            </Link>
            <Link to="/station3">
                <img src="/Vector 138.png" alt="Map" style={{ position: 'absolute', top: '20px', left: '815px', width: '330px' }}/>
                <span className={styles.label} style={{ top: '50px', left: '1170px' }}>Return to<br></br>main map</span>
            </Link>
        </div>
    );
}

export default Module2;