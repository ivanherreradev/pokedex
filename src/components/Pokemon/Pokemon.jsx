import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '../../assets/arrow';
import { WeightIcon } from '../../assets/WeightIcon';
import { HeightIcon } from '../../assets/HeightIcon';
import style from './styles.module.css';

function Pokemon({ pokemon, backgroundSelected }) {
  return (
    <div className={style.pokemonDetailBg}>
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
                className={`${style.pokemonDetailInfoType} ${backgroundSelected}`}
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
                      className={`${style.pokemonDetailBaseStatsBarsBg} ${backgroundSelected}`}
                    />
                    <div
                      className={`${style.pokemonDetailBaseStatsBarsSecondLine} ${backgroundSelected}`}
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
  );
}

export default Pokemon;
