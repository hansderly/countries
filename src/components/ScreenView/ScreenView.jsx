import React from 'react';
import PropTypes from 'prop-types';

import styles from './ScreenView.module.css';

const ScreenView = ({ children }) => <div className={styles.container}>{children}</div>;

ScreenView.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScreenView;
