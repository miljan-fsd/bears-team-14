import React from 'react';

import FeaturedItems from '../FeaturedItems';
import ItemCard from '../ItemCard';
import { HeroImage, Title, Wrapper } from './style';

const maxFeatured = 9;
const getFeatured = (data = []) => data.filter(item => item.isFeatured);
const parseImgUrl = url => url.replace(/upload\//, 'upload/thumbs/');

const Home = ({ ...props, data }) =>
  <Wrapper>
    <HeroImage />
    <Title>Featured Jobs</Title>
    <FeaturedItems>
      {data.length
        ? getFeatured(data)
            .map(item =>
              <ItemCard
                {...props}
                {...item.info}
                {...item}
                key={item._id}
                id={item._id}
                imgUrl={item.info.imgUrl && parseImgUrl(item.info.imgUrl)}
              />
            )
            .slice(0, maxFeatured)
        : <div>Loading...</div>}
    </FeaturedItems>
  </Wrapper>;

export default Home;
