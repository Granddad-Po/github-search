import React from 'react';
import {Link} from "react-router-dom";
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={styles.container}>
            <h3 className={styles.logo}>Github Search</h3>
            <span>
                <Link className={styles.link} to={'/'}>Home</Link>
                <Link className={styles.link} to={'/favourites'}>Favourites</Link>
            </span>
        </nav>
    );
};

export default Navigation;