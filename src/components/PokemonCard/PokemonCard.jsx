import { Link } from 'react-router-dom';
import style from './styles.module.css';

function PokemonCard({ pokemon }) {
  const formatPokemonName = (name) => {
    return name.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  };

  return (
    <Link
      to={`/pokemon/${pokemon.id}`}
      key={pokemon.id}
      className={`${style.pokemonCardContainer} ${pokemon.types[0].type.name}`}
    >
      <div className={style.pokemonCardInfo}>
        <h3>{formatPokemonName(pokemon.name)}</h3>

        <p className={style.pokemonCardInfoTypes}>
          {pokemon.types.map((type, index) => {
            return (
              <span key={index} className={style.pokemonCardInfoType}>
                {type.type.name}
              </span>
            );
          })}
        </p>
      </div>
      <img
        src={
          pokemon?.sprites?.other?.dream_world?.front_default ||
          pokemon?.sprites?.other?.['official-artwork']?.front_default
        }
      />
    </Link>
  );
}

export default PokemonCard;
