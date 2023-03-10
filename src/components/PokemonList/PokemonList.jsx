import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';
import styles from './PokemonList.module.css';

const PokemonList = ({ pokemons }) => {
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
