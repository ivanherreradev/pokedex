import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [pokemons, setPokemons] = useState([]);
    const [loadMore, setLoadMore] = useState(url);

    const getPokemons = async () => {
        const response = await fetch(loadMore);
        const data = await response.json();

        setLoadMore(data.next);

        const createPokemon = (results) => {
            results.forEach(async (pokemon) => {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                const data = await response.json();

                setPokemons((currentPokemons) => [...currentPokemons, data]);
            });
        };

        createPokemon(data.results);
    };

    useEffect(() => {
        getPokemons();
    }, []);

    return { pokemons, loadMore };
};
