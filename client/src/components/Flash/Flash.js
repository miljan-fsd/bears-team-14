import React from 'react';

import { Wrapper } from './styled';

const Flash = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default Flash;
