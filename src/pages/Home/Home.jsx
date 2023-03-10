import React from 'react';
import PokemonList from '../../components/PokemonList/PokemonList';
import styles from './Home.module.css';

const Home = () => {
    return (
        <main className={styles.container}>
            <PokemonList />
        </main>
    );
};

export default Home;
