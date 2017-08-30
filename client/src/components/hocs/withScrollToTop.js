import React, { Component } from 'react';

export const withScrollToTop = WrappedComponent => {
  return class ScrollToTop extends Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
