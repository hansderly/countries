import React from 'react';
import PropTypes from 'prop-types';

import styles from './Search.module.css';

const Search = ({ valueSearch, onChangeSearch }) => (
  <div className={styles.container}>
    <input placeholder="Search..." type="text" onChange={onChangeSearch} value={valueSearch} />
  </div>
);

Search.propTypes = {
  valueSearch: PropTypes.string.isRequired,
  onChangeSearch: PropTypes.func.isRequired,
};

export default Search;
