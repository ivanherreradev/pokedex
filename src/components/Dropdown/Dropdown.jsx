import styles from './styles.module.css';
import { useState } from 'react';
import { ArrowDown, ArrowUp } from './utils/Arrows';
import { pokemonTypes } from './utils/pokemonTypes';

const Dropdown = ({ selectedType, setSelectedType, setPage }) => {
  const [isActive, setIsActive] = useState(false);

  const options = pokemonTypes;

  return (
    <div className={styles.dropdown}>
      <div
        className={styles.dropdownBtn}
        onClick={() => setIsActive(!isActive)}
      >
        {selectedType ? selectedType : 'Choose one'}{' '}
        {isActive ? <ArrowUp /> : <ArrowDown />}
      </div>
      {isActive && (
        <div className={styles.dropdownContent}>
          <div
            className={styles.dropdownItem}
            onClick={() => {
              setSelectedType('');
              setIsActive(false);
              setPage(1);
            }}
          >
            All
          </div>
          {options.map((option) => {
            return (
              <div
                className={styles.dropdownItem}
                onClick={() => {
                  setSelectedType(option);
                  setIsActive(false);
                  setPage(1);
                }}
              >
                {option}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
