import React from 'react';
import PropTypes from 'prop-types';

import styles from './MainCard.module.css';

const MainCard = ({ flag, name }) => (
  <div className={styles.container}>
    <div className={styles.map}>
      <img src={flag} alt="map" />
    </div>
    <div className={styles.continent}>
      <div>
        <h3>{name}</h3>
      </div>
    </div>
  </div>
);

MainCard.propTypes = {
  flag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default MainCard;
