import React from 'react';
import { Link } from 'react-router-dom';

import FeaturedItems from '../FeaturedItems';
import {
  HeroButton,
  HeroContent,
  HeroFooter,
  HeroWrapper,
  HeroTitle,
  Title,
  Wrapper,
} from './style';

const Home = ({ data, loading, total, ...props }) =>
  <Wrapper>
    <HeroWrapper>
      <HeroTitle>
        Lorem. Ipsum.<br />
        <strong>Dolor sit amet</strong>
      </HeroTitle>
      <HeroContent>
        <Link to="/jobs/">
          <HeroButton>
            <i className="fa fa-search" aria-hidden="true" />Explore all jobs
          </HeroButton>
        </Link>
      </HeroContent>
      <HeroFooter>
        Currently <strong>{total}</strong> jobs available
      </HeroFooter>
    </HeroWrapper>
    <Title>Featured Jobs</Title>
    {!loading
      ? <FeaturedItems {...props} data={data} />
      : <div>Loading...</div>}
  </Wrapper>;

export default Home;
