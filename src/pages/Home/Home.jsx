import { useState } from 'react';
import { usePokemon } from '../../hooks/usePokemon';
import { Ring } from '@uiball/loaders';
import style from './styles.module.css';
import Pagination from '../../components/Pagination/Pagination';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Dropdown from '../../components/Dropdown/Dropdown';

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
    <div className={style.homeBody}>
      <div className={style.filterContainer}>
        <Dropdown
          setPage={setPage}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
      </div>

      {loading ? (
        <div className={style.homeLoader}>
          <Ring size={40} lineWeight={5} speed={2} color="black" />
        </div>
      ) : (
        <div>
          <div className={style.homeContainer}>
            {filteredPokemons
              .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
              .map((pokemon) => {
                return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
              })}
          </div>

          <Pagination page={page} setPage={setPage} max={max} />
        </div>
      )}
    </div>
  );
}

export default Home;
