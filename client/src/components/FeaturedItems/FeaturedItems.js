import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import { Wrapper } from './style.js';

const FeaturedItems = ({ children }) =>
  <Wrapper>
    {children}
  </Wrapper>;

FeaturedItems.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FeaturedItems;
