import React from 'react';
import PropTypes from 'prop-types';

import styles from './HeadCardList.module.css';

const HeadCardList = ({ name }) => (
  <div className={styles.container}>
    <p>
      Stat by
      {' '}
      {name}
    </p>
  </div>
);

HeadCardList.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HeadCardList;
