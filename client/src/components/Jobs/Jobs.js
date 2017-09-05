import React, { Component } from 'react';
import { TransitionGroup } from 'react-transition-group';

import FeaturedItems from '../FeaturedItems';
import Search from '../Search';
import { Header, SearchStatus, StyledCSSTransition } from './styled';

import filterData from '../../helpers/filterData';

class Jobs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      filteredData: props.data,
      showFoundCount: false,
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
        showFoundCount: false,
      }));

    const filteredData = filterData(data, key);

    this.setState(() => ({
      filteredData,
      showFoundCount: true,
      searchKey: key,
    }));
  };

  render() {
    const { filteredData, searchKey, showFoundCount } = this.state;
    const { data, ...props } = this.props;
    return (
      <div>
        <Header>Explore jobs</Header>
        <Search handleFilter={this.filterItems} />
        <TransitionGroup>
          {showFoundCount && (
            <StyledCSSTransition>
              <SearchStatus>
                Found {filteredData.length} matches for{' '}
                <strong>"{searchKey}"</strong>
              </SearchStatus>
            </StyledCSSTransition>
          )}
        </TransitionGroup>
        <FeaturedItems data={filteredData} {...props} />
      </div>
    );
  }
}

export default Jobs;
