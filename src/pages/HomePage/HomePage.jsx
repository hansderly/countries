import React from 'react';

import {
  ScreenView, Navbar, MainCard, HeadCardList, CardCountry,
} from '../../components';
import styles from './HomePage.module.css';

const HomePage = () => (
  <ScreenView>
    <Navbar />
    <MainCard />
    <HeadCardList />
    <div className={styles.container}>
      <CardCountry />
    </div>
  </ScreenView>
);

export default HomePage;
