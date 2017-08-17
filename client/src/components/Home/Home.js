import React from 'react';

import FeaturedItems from '../FeaturedItems';
import { HeroImage, Title, Wrapper } from './style';

const Home = ({ data, loading, ...props }) =>
  <Wrapper>
    <HeroImage />
    <Title>Featured Jobs</Title>
    {!loading
      ? <FeaturedItems {...props} data={data} />
      : <div>Loading...</div>}
  </Wrapper>;

export default Home;
