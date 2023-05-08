import { useState } from 'react';
import { usePokemon } from '../hooks/usePokemon';
import style from './styles.module.css';
import Pagination from '../components/Pagination/Pagination';

function Home() {
  const [url, setUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  );
  const { pokemons, loading } = usePokemon(url);
  // Pagination
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const max = Math.ceil(pokemons.length / perPage);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className={style.container}>
            {pokemons
              .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
              .map((pokemon) => {
                return (
                  <div key={pokemon.id} className={style.pokemon}>
                    <img src={pokemon.sprites.front_default} />
                  </div>
                );
              })}
          </div>

          <Pagination page={page} setPage={setPage} max={max} />
        </div>
      )}
    </div>
  );
}

export default Home;
