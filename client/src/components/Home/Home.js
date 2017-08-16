import React from 'react';

import FeaturedItems from '../FeaturedItems';
import ItemCard from '../ItemCard';

const Home = ({ ...props, data }) =>
  <div>
    <FeaturedItems>
      {data.length
        ? data.map(
            (item, i) =>
              item.isFeatured &&
              <ItemCard
                {...props}
                {...item.info}
                {...item}
                key={item._id}
                id={item._id}
                imgUrl={
                  item.info.imgUrl &&
                  item.info.imgUrl.replace(/upload\//, 'upload/thumbs/')
                }
              />
          )
        : <div>Loading...</div>}
    </FeaturedItems>
  </div>;

export default Home;
