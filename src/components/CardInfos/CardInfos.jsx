import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import PropTypes from 'prop-types';

import styles from './CardInfos.module.css';

const style = {
  dark: {
    backgroundColor: '#2657b3',
  },
  light: {
    backgroundColor: '#4369b2',
  },
};

const CardInfos = ({ id, keyObj, valueObj }) => {
  const bg = id % 2 === 1 ? style.dark : style.light;

  return (
    <div style={bg} className={styles.container}>
      <h4>{keyObj}</h4>
      <div className={styles.infos}>
        <p>{valueObj}</p>
        <FiArrowRightCircle />
      </div>
    </div>
  );
};

CardInfos.propTypes = {
  id: PropTypes.number.isRequired,
  keyObj: PropTypes.string.isRequired,
  valueObj: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default CardInfos;
