import React from 'react';
import PropTypes from 'prop-types';

import ItemCard from '../ItemCard';
import { Wrapper } from './style.js';

const parseImgUrl = url => url.replace(/upload\//, 'upload/thumbs/');

const FeaturedItems = ({ data, ...props }) =>
  <Wrapper>
    {data.map(item =>
      <ItemCard
        {...props}
        key={item._id}
        id={item._id}
        imgUrl={item.info.imgUrl && parseImgUrl(item.info.imgUrl)}
        title={item.info.title}
        description={item.info.description}
        expDate={item.expDate}
        companyName={item.companyName}
        location={item.location}
      />
    )}
  </Wrapper>;

FeaturedItems.propTypes = {
  data: PropTypes.array.isRequired,
};

export default FeaturedItems;
