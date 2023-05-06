import { useState } from 'react';
import { usePokemon } from '../hooks/usePokemon';
import style from './styles.module.css';

function Home() {
  const [url, setUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  );
  const { pokemons, loading } = usePokemon(url);

  return (
    <div className={style.container}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        pokemons.map((pokemon) => {
          return (
            <div key={pokemon.id} className={style.pokemon}>
              <img src={pokemon.sprites.front_default} />
            </div>
          );
        })
      )}
    </div>
  );
}

export default Home;
