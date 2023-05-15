import { useState } from 'react';
import { usePokemon } from '../../hooks/usePokemon';
import style from './styles.module.css';
import Pagination from '../../components/Pagination/Pagination';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

function Home() {
  const [url, setUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  );
  const { pokemons, loading } = usePokemon(url);

  // Filter pokemon by type
  const [selectedType, setSelectedType] = useState('');

  const filterPokemonsByType = () => {
    // If no type is selected, return all the pokemons
    if (!selectedType) {
      return pokemons;
    }
    // Filter the pokemons based on the selected type
    return pokemons.filter((pokemon) => {
      return pokemon.types.some((type) => {
        return type.type.name === selectedType;
      });
    });
  };

  const filteredPokemons = filterPokemonsByType();

  // Pagination
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const max = Math.ceil(filteredPokemons.length / perPage);

  return (
    <div>
      <div>
        <label htmlFor="types">Filter by type:</label>
        <select
          id="types"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">All</option>
          <option value="grass">Grass</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="electric">Electric</option>
          <option value="flying">Flying</option>
          <option value="bug">Bug</option>
          <option value="normal">Normal</option>
          <option value="poison">Poison</option>
          <option value="ground">Ground</option>
          <option value="rock">Rock</option>
          <option value="fighting">Fighting</option>
          <option value="psychic">Psychic</option>
          <option value="ghost">Ghost</option>
          <option value="ice">Ice</option>
          <option value="dragon">Dragon</option>
          <option value="dark">Dark</option>
          <option value="steel">Steel</option>
          <option value="fairy">Fairy</option>
        </select>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className={style.container}>
            {filteredPokemons
              .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
              .map((pokemon) => {
                return <PokemonCard pokemon={pokemon} />;
              })}
          </div>

          <Pagination page={page} setPage={setPage} max={max} />
        </div>
      )}
    </div>
  );
}

export default Home;
