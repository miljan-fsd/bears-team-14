import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const FeaturedItems = ({ children }) =>
  <div className="featured-items">
    {children}
  </div>;

FeaturedItems.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FeaturedItems;
