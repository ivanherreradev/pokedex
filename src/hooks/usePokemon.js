import { useEffect, useState } from 'react';

export const usePokemon = (url, pokemonName) => {
    const [pokemon, setPokemon] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (pokemonName) fetchPokemon();
    }, []);

    const fetchPokemon = async () => {
        if (pokemonName) {
            setIsLoading(true);
            const response = await fetch(`${url}/${pokemonName}`);
            const data = await response.json();

            setPokemon(data);
            setIsLoading(false);
        }
    };

    return { pokemon, isLoading };
};
