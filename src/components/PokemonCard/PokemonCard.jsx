import React from 'react';
import styles from './PokemonCard.module.css';

const PokemonCard = ({ id, img, name, types, weight, height, key }) => {
    return (
        <div key={key} className="container">
            <p className="idBack">{id}</p>
            <div className="img">
                <img src={img} alt={name} />
            </div>
            <div className="info">
                <div className="nameContainer">
                    <p className="id">{id}</p>
                    <p className="name">{name}</p>
                </div>
                <div className="types">
                    {types.map((element) => (
                        <p className={`${element.type.name} type`}>{element.type.name}</p>
                    ))}
                </div>
                <div className="stats">
                    <p className="stat">{height}m</p>
                    <p className="stat">{weight}kg</p>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;
