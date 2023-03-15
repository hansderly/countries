import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import {
  HeadCardList, MainCard, Navbar, ScreenView,
} from '../../components';

import styles from './DetailPage.module.css';

const DetailPage = () => (
  <ScreenView>
    <Navbar />
    <MainCard />
    <HeadCardList />
    <div className={styles.container}>
      <h4>name</h4>
      <div className={styles.infos}>
        <p>25,101 Peoples</p>
        <FiArrowRightCircle />
      </div>
    </div>
  </ScreenView>
);

export default DetailPage;
