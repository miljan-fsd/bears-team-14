import React from 'react';

import FeaturedItems from '../FeaturedItems';
import ItemCard from '../ItemCard';

const Jobs = props => {
  return (
    <FeaturedItems>
      {props.data.map(job =>
        <ItemCard
          key={job._id}
          id={job._id}
          imgUrl={
            job.info.imgUrl &&
            job.info.imgUrl.replace(/upload\//, 'upload/thumbs/')
          }
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
