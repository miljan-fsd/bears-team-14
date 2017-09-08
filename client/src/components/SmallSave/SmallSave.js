import React, { Component } from 'react';

import { Bookmark, Save } from './styled';

class SmallSave extends Component {
  state = {
    caption: this.props.isSaved ? 'Saved' : 'Save',
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.isSaved !== nextProps.isSaved) {
      this.setState(() => ({
        caption: nextProps.isSaved ? 'Saved' : 'Save',
      }));
    }
  }

  handleMouseEnter = () => {
    if (this.props.isSaved) {
      this.setState(() => ({
        caption: 'Remove',
      }));
    }
  };

  handleMouseLeave = () => {
    this.setState(() => ({
      caption: this.props.isSaved ? 'Saved' : 'Save',
    }));
  };

  render() {
    const { caption } = this.state;

    return (
      <Save
        data-name="save"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {caption}&nbsp;
        <Bookmark saved={this.props.isSaved}>
          <i className="fa fa-bookmark" aria-hidden="true" />
        </Bookmark>
      </Save>
    );
  }
}

export default SmallSave;
