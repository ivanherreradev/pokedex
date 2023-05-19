import { useEffect, useState } from 'react';
import axios from 'axios';

/**
 * Custom hook to fetch Pokemon details from the PokeAPI.
 *
 * @param {string} id - The ID of the Pokemon.
 * @returns {Object} An object with the `pokemon` obejct and a `loading` flag.
 */
export const usePokemonDetails = (id) => {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(false);

  /**
   * Fetches the Pokemon details from the PokeAPI based on the provided ID.
   * and updates the `pokemon` state with the results.
   *
   * @returns {void}
   */
  const getPokemon = async () => {
    setLoading(true);
    setPokemon([]);

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemon(response.data);

    setLoading(false);
  };

  useEffect(() => {
    getPokemon();
  }, [id]);

  /**
   * Returns the `pokemon` state object and the `loading` flag.
   */
  return { pokemon, loading };
};
