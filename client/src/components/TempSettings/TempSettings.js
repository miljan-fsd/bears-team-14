import React from 'react';

import { Wrapper } from './styled';

const TempSettings = props => {
  return (
    <Wrapper>
      <label>Admin&nbsp;</label>
      <input type="checkbox" onChange={props.toggleAdmin} />
    </Wrapper>
  );
};

export default TempSettings;
