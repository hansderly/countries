import React from 'react';

import styles from './MainCard.module.css';

const MainCard = () => (
  <div className={styles.container}>
    <div className={styles.map}>
      <img src="/assets/img/map.png" alt="map" />
    </div>
    <div className={styles.continent}>
      <div>
        <h3>Europe</h3>
        <p>10 country</p>
      </div>
    </div>
  </div>
);

export default MainCard;
