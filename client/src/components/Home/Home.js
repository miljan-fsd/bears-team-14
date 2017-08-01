import React from 'react';

import FeaturedItems from '../FeaturedItems';
import ItemCard from '../ItemCard';

const Home = ({ data }) =>
  <div>
    <FeaturedItems>
      {data.length
        ? data.map((item, i) =>
            <ItemCard key={item.id} {...item.info} expDate={item.expDate} />
          )
        : <div>Loading...</div>}
    </FeaturedItems>
  </div>;

export default Home;
