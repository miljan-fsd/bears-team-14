import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

import { Backdrop, Button, CheckBox, DataLine } from './style';

class AdminPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      featured: props.featured,
      busy: props.busy,
      showAll: true,
    };
  }

  checkDate = str => {
    const timestamp = Date.parse(str);
    if (isNaN(timestamp)) return;
    return new Date(timestamp);
  };

  handleClick = (id, e) => {
    switch (e.target.name) {
      case 'date':
        if (e.type !== 'change') break;
        this.updateDate(id, e.target.value);
        break;
      case 'featured':
        if (e.type !== 'change') break;
        this.props.updateItem(id, { isFeatured: e.target.checked });
        break;
      case 'delete':
        this.props.deleteItem(id);
        break;
      case 'edit':
        console.log('edit clicked', e.type, id);
        break;
      default:
        return;
    }
  };

  updateDate = (id, date) => {
    const validDate = this.checkDate(date);
    if (validDate) {
      this.props.updateItem(id, { expDate: validDate });
    }
  };

  showFeatured = () => {
    this.setState(s => ({
      showAll: !s.showAll,
    }));
  };

  componentWillReceiveProps(nextProps) {
    this.setState(() => ({
      ...nextProps,
    }));
  }

  render() {
    const { busy, data, featured, showAll } = this.state;

    const arr = showAll ? data : featured;

    return (
      <div>
        {busy && <Backdrop />}
        <div>
          <div>
            Total Items: {data.length} | Total Featured: {featured.length}{' '}
            <Button onClick={this.showFeatured}>
              {showAll ? 'Show Featured' : 'Show All'}
            </Button>
          </div>
          <FlipMove
            duration={350}
            easing="ease-out"
            leaveAnimation="accordionVertical"
            enterAnimation="accordionVertical"
          >
            {arr.map((item, i) =>
              <DataLine
                key={item._id}
                onClick={this.handleClick.bind(null, item._id)}
                onChange={this.handleClick.bind(null, item._id)}
              >
                <div>
                  {i + 1}&nbsp;-&nbsp;
                </div>
                <div style={{ flex: 1 }}>
                  {item.info.title} at <strong>{item.companyName}</strong> |{' '}
                  {item._id}
                </div>
                <CheckBox name="featured" defaultChecked={item.isFeatured} />
                <input
                  name="date"
                  type="date"
                  defaultValue={item.expDate.substr(0, 10)}
                />
                <Button name="edit">Edit</Button>
                <Button danger name="delete">
                  Delete
                </Button>
              </DataLine>
            )}
          </FlipMove>
        </div>
      </div>
    );
  }
}

export default AdminPanel;
