import React from 'react';

import { withScrollToTop } from '../hocs/withScrollToTop';

import FeaturedItems from '../FeaturedItems';

import { Header, Status } from './styled';

const Bookmarks = ({ savedJobs = [], data, loggedIn, ...props }) => {
  const jobs = savedJobs.map(id => {
    return data.filter(job => job._id === id)[0];
  });
  const status = !jobs.length
    ? `You haven't saved any jobs yet`
    : `You have ${jobs.length} saved job${jobs.length === 1 ? '' : 's'}`;

  if (!loggedIn || !data) {
    return null;
  }

  return (
    <div>
      <Header>My saved jobs</Header>
      <Status>{status}</Status>
      <FeaturedItems {...props} data={jobs} savedJobs={savedJobs} />;
    </div>
  );
};

export default withScrollToTop(Bookmarks);
