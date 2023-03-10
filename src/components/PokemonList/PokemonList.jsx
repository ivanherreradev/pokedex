import React, { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';

const PokemonList = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20';
    const { pokemons, loadMore } = useFetch(url);

    return <div>PokemonList</div>;
};

export default PokemonList;
