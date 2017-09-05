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
  Placeholder,
  Save,
  Title,
  Wrapper,
} from './style.js';

const lazyLoadConfig = {
  height: '400',
  once: true,
  placeholder: <Placeholder>Loading...</Placeholder>,
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
}) => {
  const handleClick = e => {
    const name = e.target.dataset.name;
    const history = props.history;

    if (name === 'save') return console.log('Saving...');

    history && history.push(`/job/${id}`);
  };

  return (
    <LazyLoad {...lazyLoadConfig}>
      <Wrapper onClick={handleClick}>
        <Image
          imgUrl={imgUrl}
          // imgUrl={'/placeholder-image.png'}
        />
        <Description>
          <Title>{title}</Title>
          <Details>
            At <span>{companyName}</span> {location}
            <DescriptionText>
              {JSON.parse(description)
                .responsibilities.replace(/\n\n\*/, '')
                .trim()}
            </DescriptionText>
          </Details>
        </Description>
        <Footer>
          <div>
            <GreenSpan>{getRemainingTime(expDate)}</GreenSpan> to apply
          </div>
          <Save data-name="save">
            Save&nbsp;
            <Bookmark>
              <i className="fa fa-bookmark" aria-hidden="true" />
            </Bookmark>
          </Save>
        </Footer>
      </Wrapper>
    </LazyLoad>
  );
};

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
