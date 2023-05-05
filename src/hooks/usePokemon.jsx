import axios from 'axios';
import { useEffect, useState } from 'react';

/**
 * A custom React hook that fetches a list of Pokemon from the given URL
 * and returns the list of Pokemon along with a loading flag.
 *
 * @param {string} url - The URL to fetch the list of Pokemon from.
 * @returns {Object} An object with the `pokemons` array and a `loading` flag.
 */
export const usePokemon = (url) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  /**
   * Fetches the list of Pokemon from the given URL and updates the
   * `pokemons` state array with the results.
   *
   * @returns {void}
   */
  const getPokemons = async () => {
    setLoading(true);
    setPokemons([]);

    const response = await axios.get(url);

    response.data.results.map(async (pokemon) => {
      const result = await axios.get(pokemon.url);
      setPokemons((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });

    setLoading(false);
  };

  useEffect(() => {
    getPokemons();
  }, [url]);

  /**
   * Returns the `pokemons` state array and the `loading` flag.
   */
  return { pokemons, loading };
};
