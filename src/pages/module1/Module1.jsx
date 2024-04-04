import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Module1.module.css';

function Module1(){
    return (
        <div className={styles.background} >
            <Link to="/VRTour">
                <img src="/officeTour_vector.png" alt="Lamp" style={{ position: 'absolute', top: '138px', left: '485px', width: '330px' }}/>
            </Link>
            <Link to="/ProfilePage">
                <img src="/profile_vector.png" alt="Book" style={{ position: 'absolute', top: '475px', left: '708px', width: '215px' }}/>
            </Link>
            <Link to="/">
                <img src="/accSetUp_vector.png" alt="Keyboard1" style={{ position: 'absolute', top: '355px', left: '880px', width: '355px' }}/>
            </Link>
            <Link to="/GeneralInfo">
                <img src="/information_vector.png" alt="Coffee" style={{ position: 'absolute', top: '160px', left: '1110px', width: '155px' }}/>
            </Link>
        </div>
    );
}

export default Module1;