import React, { Component } from 'react';

import FeaturedItems from '../FeaturedItems';
import Search from '../Search';

const lowercaseArray = arr => arr.map(item => item.toLowerCase());

class Jobs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      filteredData: props.data,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(() => ({
      data: nextProps.data,
      filteredData: nextProps.data,
    }));
  }

  componentDidUpdate() {
    // Trigger lazy loading
    window.scrollBy(0, 1);
    window.scrollBy(0, -1);
  }

  filterItems = (key = '') => {
    const data = this.state.data;
    if (!key.length)
      return this.setState(() => ({
        filteredData: data,
      }));

    const filteredData = data.filter(
      item =>
        (item.info &&
          item.info.title &&
          item.info.title.toLowerCase().includes(key)) ||
        (item.tags && lowercaseArray(item.tags).includes(key)) ||
        (item.location && item.location.toLowerCase().includes(key))
    );

    this.setState(() => ({
      filteredData,
    }));
  };

  render() {
    const { filteredData } = this.state;
    const { data, ...props } = this.props;
    return (
      <div>
        <Search handleFilter={this.filterItems} />
        <FeaturedItems data={filteredData} {...props} />
      </div>
    );
  }
}

export default Jobs;
