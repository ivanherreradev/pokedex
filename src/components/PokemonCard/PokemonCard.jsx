import React from 'react';
import styles from './PokemonCard.module.css';

const PokemonCard = ({ id, img, name, types, weight, height, key }) => {
    return (
        <div key={key} className={styles.container}>
            <p className={styles.idBack}>{id}</p>
            <div className={styles.img}>
                <img src={img} alt={name} />
            </div>
            <div className={styles.info}>
                <div className={styles.nameContainer}>
                    <p className={styles.id}>{id}</p>
                    <p className={styles.name}>{name}</p>
                </div>
                <div className={styles.types}>
                    {types.map((element) => (
                        <p className={`${element.type.name} ${styles.type}`}>{element.type.name}</p>
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
