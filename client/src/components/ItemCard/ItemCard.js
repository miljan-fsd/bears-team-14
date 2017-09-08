import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import getRemainingTime from '../../helpers/getRemainingTime';

import SmallSave from '../SmallSave';

import {
  Description,
  DescriptionText,
  Details,
  Footer,
  GreenSpan,
  Image,
  Placeholder,
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
  companyName,
  location,
}) => {
  const handleClick = e => {
    const name = e.target.dataset.name;
    const history = props.history;

    if (name === 'save') return console.log('Saving...');

    history && history.push(`/job/${id}`);
  };

  const isSaved = props.savedJobs && props.savedJobs.includes(id);

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
          <SmallSave isSaved={isSaved} />
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
};

ItemCard.defaultProps = {
  imgUrl: '/placeholder-image.png',
};

export default ItemCard;
