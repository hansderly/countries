import React from 'react';
import { FiChevronLeft, FiSettings, FiMic } from 'react-icons/fi';

import styles from './Navbar.module.css';

const Navbar = () => (
  <div className={styles.navbar}>
    <div className={styles.return}>
      <FiChevronLeft />
      <p>2022</p>
    </div>
    <div className={styles.title}>
      <p>most view</p>
    </div>
    <div className={styles.settings}>
      <FiMic />
      <FiSettings />
    </div>
  </div>
);

export default Navbar;
