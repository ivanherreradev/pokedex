import { Link, useParams } from 'react-router-dom';
import { usePokemonDetails } from '../../hooks/usePokemonDetails';
import { ArrowLeftIcon } from '../../assets/arrow';
import { WeightIcon } from '../../assets/WeightIcon';
import { HeightIcon } from '../../assets/HeightIcon';
import style from './styles.module.css';

function PokemonDetail() {
  const { id } = useParams();
  const { pokemon, loading } = usePokemonDetails(id);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div
          className={`${style.pokemonDetailBg} ${
            pokemon.types && pokemon.types.length > 0
              ? pokemon.types[0].type.name
              : ''
          }`}
        >
          {/* Header */}
          <header className={style.pokemonDetailHeader}>
            <div className={style.pokemonDetailHeaderLeft}>
              <Link to={'/'}>
                <ArrowLeftIcon />
              </Link>
              <span>{pokemon?.name}</span>
            </div>
            <p>#{pokemon?.id}</p>
          </header>

          {/* Info */}
          <div className={style.pokemonDetailInfo}>
            <img
              src={
                pokemon?.sprites?.other?.dream_world?.front_default ||
                pokemon?.sprites?.other?.['official-artwork']?.front_default
              }
              alt={pokemon?.name}
            />

            {/* Types */}
            <div className={style.pokemonDetailInfoTypes}>
              {pokemon?.types?.map((type) => {
                return (
                  <div
                    key={type.type.name}
                    className={`${style.pokemonDetailInfoType} ${
                      pokemon.types && pokemon.types.length > 0
                        ? pokemon.types[0].type.name
                        : ''
                    }`}
                  >
                    {type.type.name}
                  </div>
                );
              })}
            </div>

            {/* Title */}
            <h2 className={style.pokemonDetailTitle}>About</h2>

            {/* Stats */}
            <div className={style.pokemonDetailStats}>
              <div className={style.pokemonDetailStatsItem}>
                <WeightIcon />
                <span>{pokemon?.weight / 10} kg</span>
                <p>Weight</p>
              </div>
              <div className={style.pokemonDetailStatsItem}>
                <HeightIcon />
                <span>{pokemon?.height / 10} m</span>
                <p>Height</p>
              </div>
            </div>

            {/* Title */}
            <h2 className={style.pokemonDetailTitle}>Base Stats</h2>

            {/* Base Stats */}
            <div className={style.pokemonDetailBaseStats}>
              {pokemon?.stats?.map((stat) => {
                return (
                  <div
                    key={stat.stat.name}
                    className={style.pokemonDetailBaseStatsItem}
                  >
                    <span>{stat.stat.name}</span>
                    <div className={style.pokemonDetailBaseStatsBars}>
                      <p>{stat.base_stat}</p>
                      <div className={style.pokemonDetailBaseStatsBarsLine}>
                        <div
                          className={`${style.pokemonDetailBaseStatsBarsBg} ${
                            pokemon.types && pokemon.types.length > 0
                              ? pokemon.types[0].type.name
                              : ''
                          }`}
                        />
                        <div
                          className={`${
                            style.pokemonDetailBaseStatsBarsSecondLine
                          } ${
                            pokemon.types && pokemon.types.length > 0
                              ? pokemon.types[0].type.name
                              : ''
                          }`}
                          style={{
                            opacity: '1',
                            width: `${(stat.base_stat / 255) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PokemonDetail;
