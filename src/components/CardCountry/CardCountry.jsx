import React from 'react';
import PropTypes from 'prop-types';
import { FiArrowRightCircle } from 'react-icons/fi';

import styles from './CardCountry.module.css';

const style = {
  dark: {
    backgroundColor: '#2657b3',
  },
  light: {
    backgroundColor: '#4369b2',
  },
};

const CardCountry = ({ name, flag }) => {
  const bg = style;

  return (
    <div style={bg} className={styles.containerCard}>
      <img src={flag} alt="map" />
      <div className={styles.infos}>
        <FiArrowRightCircle />
        <p>{name}</p>
      </div>
    </div>
  );
};

CardCountry.propTypes = {
  name: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};

export default CardCountry;
