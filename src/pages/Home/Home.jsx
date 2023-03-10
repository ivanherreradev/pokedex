import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PokemonList from '../../components/PokemonList/PokemonList';
import styles from './Home.module.css';

const Home = () => {
    return (
        <>
            <Navbar />
            <main className={styles.container}>
                <PokemonList />
            </main>
        </>
    );
};

export default Home;
