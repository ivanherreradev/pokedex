import React, { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import PokemonCard from '../PokemonCard/PokemonCard';
import styles from './PokemonList.module.css';

const PokemonList = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20';
    const { pokemons, loadMore } = useFetch(url);

    pokemons.sort((a, b) => a.id - b.id);

    return (
        <div className={styles.container}>
            {pokemons.map((pokemon) => {
                return (
                    <PokemonCard
                        key={pokemon.id}
                        id={pokemon.id}
                        img={pokemon.sprites.other.dream_world.front_default}
                        name={pokemon.name}
                        types={pokemon.types}
                        weight={pokemon.weight}
                        height={pokemon.height}
                    />
                );
            })}
        </div>
    );
};

export default PokemonList;
