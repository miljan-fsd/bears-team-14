import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import getRemainingTime from '../../helpers/getRemainingTime';

import {
  Bookmark,
  Description,
  DescriptionText,
  Details,
  Footer,
  GreenSpan,
  Image,
  Save,
  Title,
  Wrapper,
} from './style.js';

const handleClick = (id, history, e) => {
  const name = e.target.dataset.name;

  if (name === 'save') return console.log('Saving...');

  history && history.push(`/job/${id}`);
};

const ItemCard = ({
  ...props,
  id,
  imgUrl,
  title,
  description,
  expDate,
  isSaved,
  companyName,
  location,
}) =>
  <LazyLoad
    height="400"
    once={true}
    placeholder={<div style={{ height: 400 }}>Loading...</div>}
  >
    <Wrapper onClick={handleClick.bind(null, id, props.history)}>
      <Image
        style={{ backgroundImage: `url(${imgUrl})` }}
        // style={{ backgroundImage: `url('/placeholder-image.png')` }}
      />
      <Description>
        <Title>
          {title}
        </Title>
        <Details>
          At <span style={{ color: 'rgb(102, 102, 102)' }}>
            {companyName}
          </span>{' '}
          {location}
          <DescriptionText>
            {JSON.parse(description)
              .responsibilities.replace(/\n/g, ' *')
              .trim()}
          </DescriptionText>
        </Details>
      </Description>
      <Footer>
        <div>
          <GreenSpan>{getRemainingTime(expDate)}</GreenSpan> to apply
        </div>
        <Save data-name="save">
          Save{' '}
          <Bookmark>
            <i className="fa fa-bookmark" aria-hidden="true" />
          </Bookmark>
        </Save>
      </Footer>
    </Wrapper>
  </LazyLoad>;

ItemCard.propTypes = {
  id: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  expDate: PropTypes.string.isRequired,
  isSaved: PropTypes.bool,
};

ItemCard.defaultProps = {
  imgUrl: '/placeholder-image.png',
  isSaved: false,
};

export default ItemCard;
