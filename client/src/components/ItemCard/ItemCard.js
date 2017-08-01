import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.css';

const ItemCard = ({ id, imgUrl, title, description, expDate, isSaved }) =>
  <div className="item-card">
    <Link to={`/job/${id}`}>
      <div
        style={{ backgroundImage: `url(${imgUrl})` }}
        className="item-card__image"
      />
      <div>
        <p>
          {title}
        </p>
        <div className="item-card__description">
          {description}
        </div>
      </div>
      <div>
        {expDate} - {isSaved ? 'unsave' : 'save'}
      </div>
    </Link>
  </div>;

ItemCard.propTypes = {
  id: PropTypes.number.isRequired,
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
