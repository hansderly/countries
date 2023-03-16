import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FiChevronLeft, FiSettings, FiMic } from 'react-icons/fi';

import styles from './Navbar.module.css';

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.navbar}>
      <div className={styles.return}>
        { pathname !== '/' && (
        <Link style={{ color: '#fff', textDecoration: 'none' }} to="/">
          <FiChevronLeft />
        </Link>
        )}
        <p>2023</p>
      </div>
      <div className={styles.title}>
        <p>
          {pathname === '/' ? 'Continent' : 'Country' }
          {' '}
        </p>
      </div>
      <div className={styles.settings}>
        <FiMic />
        <FiSettings />
      </div>
    </div>
  );
};

export default Navbar;
