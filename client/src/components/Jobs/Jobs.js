import React from 'react';
import LazyLoad from 'react-lazyload';

import ItemCard from '../ItemCard';

import './style.css';

const Jobs = props => {
  return (
    <div className="jobs">
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
    </div>
  );
};

export default Jobs;
