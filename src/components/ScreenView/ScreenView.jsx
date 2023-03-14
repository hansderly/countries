import React from 'react';
import PropTypes from 'prop-types';

const ScreenView = ({ children }) => <div>{children}</div>;

ScreenView.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScreenView;
