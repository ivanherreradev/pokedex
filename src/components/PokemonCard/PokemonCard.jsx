import React from 'react';
import { selectStyle } from '../../utils/selectStyle';
import { idTransform } from '../../utils/idTransform';
import styles from './PokemonCard.module.css';

const PokemonCard = ({ id, img, name, types, weight, height, key }) => {
    return (
        <div key={key} className={styles.container}>
            <p className={styles.idBack}>#{idTransform(id)}</p>
            <div className={styles.img}>
                <img src={img} alt={name} />
            </div>
            <div className={styles.info}>
                <div className={styles.nameContainer}>
                    <p className={styles.id}>#{idTransform(id)}</p>
                    <p className={styles.name}>{name}</p>
                </div>
                <div className={styles.types}>
                    {types.map((element) => (
                        <p className={styles.type} style={selectStyle(element.type.name)}>
                            {element.type.name}
                        </p>
                    ))}
                </div>
                <div className={styles.stats}>
                    <p className={styles.stat}>{height}m</p>
                    <p className={styles.stat}>{weight}kg</p>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;
