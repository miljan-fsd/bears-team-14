import React from 'react';

import FeaturedItems from '../FeaturedItems';
import ItemCard from '../ItemCard';

const parseImgUrl = url => url.replace(/upload\//, 'upload/thumbs/');

const Jobs = ({ data, ...props }) => {
  return (
    <FeaturedItems>
      {data.map(job =>
        <ItemCard
          {...props}
          key={job._id}
          id={job._id}
          imgUrl={job.info.imgUrl && parseImgUrl(job.info.imgUrl)}
          title={job.info.title}
          description={job.info.description}
          expDate={job.expDate}
          companyName={job.companyName}
          location={job.location}
        />
      )}
    </FeaturedItems>
  );
};

export default Jobs;
