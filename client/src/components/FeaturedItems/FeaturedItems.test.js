import React from 'react';
import ReactDOM from 'react-dom';
import FeaturedItems from './FeaturedItems';

describe('FeaturedItems component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FeaturedItems children={[]} />, div);
  });
});
