import React from 'react';

import {
  ScreenView, MainCard, HeadCardList, CardCountry,
} from '../../components';
import styles from './HomePage.module.css';

const HomePage = () => (
  <ScreenView>
    <MainCard />
    <HeadCardList />
    <div className={styles.container}>
      <CardCountry />
    </div>
  </ScreenView>
);

export default HomePage;
