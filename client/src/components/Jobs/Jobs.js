import React from 'react';

import FeaturedItems from '../FeaturedItems';

const Jobs = ({ data, ...props }) => <FeaturedItems data={data} {...props} />;

export default Jobs;
