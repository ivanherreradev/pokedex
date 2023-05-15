import { Link } from 'react-router-dom';
import style from './styles.module.css';

function PokemonCard({ pokemon }) {
  return (
    <Link
      to={`/pokemon/${pokemon.id}`}
      key={pokemon.id}
      className={`${style.pokemonCardContainer} ${pokemon.types[0].type.name}`}
    >
      <div className={style.pokemonCardInfo}>
        <h3>{pokemon.name}</h3>

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
      <img src={pokemon?.sprites?.other?.dream_world?.front_default} />
    </Link>
  );
}

export default PokemonCard;
