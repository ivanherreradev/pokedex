import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import style from './styles.module.css';

function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPokemon = async () => {
    setLoading(true);

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    setPokemon(response.data);

    setLoading(false);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div>
      <header>
        <div>
          <Link to={'/'}>Home</Link>
          <h1>{pokemon?.name}</h1>
        </div>
        <p>#{pokemon?.id}</p>
      </header>

      <div>
        <img
          src={pokemon?.sprites?.other?.dream_world?.front_default}
          alt={pokemon?.name}
        />

        <div>
          {pokemon?.types?.map((type) => {
            return <div key={type.type.name}>{type.type.name}</div>;
          })}
        </div>

        <h2>About</h2>

        <div>
          <span>Weight: {pokemon?.weight} </span>
          <span>Height: {pokemon?.height} </span>
          <ul>
            Abilities:{' '}
            {pokemon?.abilities?.map((ability) => {
              return (
                <li key={ability.ability.name}>{ability.ability.name} </li>
              );
            })}
          </ul>
        </div>

        <h2>Base Stats</h2>
        <ul>
          {pokemon?.stats?.map((stat) => {
            return (
              <li key={stat.stat.name}>
                {stat.stat.name} ({stat.base_stat})
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default PokemonDetail;
