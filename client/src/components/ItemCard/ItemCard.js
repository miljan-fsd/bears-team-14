import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const ItemCard = ({ imgUrl, title, description, expDate, isSaved }) =>
  <div className="item-card">
    <div
      style={{ backgroundImage: `url(${imgUrl})` }}
      className="item-card__image"
    />
    <div>
      <p>
        {title}
      </p>
      <p>
        {description}
      </p>
    </div>
    <div>
      {expDate} - {isSaved ? 'unsave' : 'save'}
    </div>
  </div>;

ItemCard.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  expDate: PropTypes.number.isRequired,
  isSaved: PropTypes.bool,
};

ItemCard.defaultProps = {
  imgUrl: '/placeholder-image.png',
  isSaved: false,
};

export default ItemCard;
