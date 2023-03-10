import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from './Logo.module.css';

const Logo = () => {
    return (
        <Link to="/" className={styles.logoContainer}>
            <img src={logo} alt="Logo Pokedex" className={styles.logo} />
        </Link>
    );
};

export default Logo;
