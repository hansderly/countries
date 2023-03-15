import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';

import styles from './CardCountry.module.css';

const CardCountry = () => (
  <button type="button" className={styles.containerCard}>
    <img src="/assets/img/map.png" alt="map" />
    <div className={styles.infos}>
      <FiArrowRightCircle />
      <p>country name</p>
    </div>
  </button>
);

export default CardCountry;
