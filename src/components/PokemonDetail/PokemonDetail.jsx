import React from 'react';
import { useParams } from 'react-router-dom';
import { usePokemon } from '../../hooks/usePokemon';
import { selectStyle } from '../../utils/selectStyle';
import ProgressBar from '../ProgressBar/ProgressBar';
import styles from './PokemonDetail.module.css';

const PokemonDetail = () => {
    let { pokemonName } = useParams();
    const url = 'https://pokeapi.co/api/v2/pokemon';

    const { pokemon, isLoading } = usePokemon(url, pokemonName);

    console.log(pokemon.types);

    return isLoading ? (
        <p>Loading...</p>
    ) : (
        <div className={styles.container}>
            <div
                className={styles.imgContainer}
                style={selectStyle(pokemon.types?.map((element) => element.type.name))}
            >
                <img
                    src={pokemon.sprites?.other?.dream_world.front_default}
                    alt={pokemon.name}
                    className={styles.img}
                />
            </div>
            <div className={styles.info}>
                <h2 className={styles.name}>{pokemon.name}</h2>
                <div className={styles.types}>
                    {pokemon.types?.map((element, index) => {
                        return (
                            <p
                                key={index}
                                className={styles.btn}
                                style={selectStyle(element.type.name)}
                            >
                                {element.type.name}
                            </p>
                        );
                    })}
                </div>
                <div className={styles.stats}>
                    {pokemon.stats?.map((stat) => {
                        return (
                            <div className={styles.stat}>
                                <h4>{stat.stat.name}</h4>
                                <ProgressBar percent={stat.base_stat} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PokemonDetail;
