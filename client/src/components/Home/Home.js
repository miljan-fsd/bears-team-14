import React from 'react';

import FeaturedItems from '../FeaturedItems';
import ItemCard from '../ItemCard';
import { HeroImage, Title, Wrapper } from './style';

const parseImgUrl = url => url.replace(/upload\//, 'upload/thumbs/');

const Home = ({ data, loading, ...props }) =>
  <Wrapper>
    <HeroImage />
    <Title>Featured Jobs</Title>
    {!loading
      ? <FeaturedItems>
          {data.map(item =>
            <ItemCard
              {...props}
              {...item.info}
              {...item}
              key={item._id}
              id={item._id}
              imgUrl={item.info.imgUrl && parseImgUrl(item.info.imgUrl)}
            />
          )}
        </FeaturedItems>
      : <div>Loading...</div>}
  </Wrapper>;

export default Home;
