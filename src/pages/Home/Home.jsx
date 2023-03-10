import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PokemonList from '../../components/PokemonList/PokemonList';
import styles from './Home.module.css';
import { useFetch } from '../../hooks/useFetch';

const Home = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20';
    const { pokemons, loadMore, getPokemons } = useFetch(url);

    pokemons.sort((a, b) => a.id - b.id);

    return (
        <>
            <Navbar />
            <main className={styles.container}>
                <PokemonList pokemons={pokemons} />
                <button onClick={() => getPokemons(loadMore)} className={styles.btn}>
                    Load more
                </button>
            </main>
        </>
    );
};

export default Home;
