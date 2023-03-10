import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';
import { types } from '../../utils/types';
import { selectStyle } from '../../utils/selectStyle';

const Navbar = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.container}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="Logo Pokedex" className={styles.logo} />
                </div>
                <ul className={styles.list}>
                    <li
                        className={styles.btn}
                        style={{ backgroundColor: '#1c1c1c', color: '#f7f7f7' }}
                    >
                        See All
                    </li>
                    {types.map((element, index) => {
                        return (
                            <li key={index} className={styles.btn} style={selectStyle(element)}>
                                {element}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
