import React, { Component } from 'react';

import { Backdrop, Button, CheckBox, DataLine } from './style';

class AdminPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      totalFeatured: props.totalFeatured,
      busy: props.busy,
    };
  }

  checkDate = str => {
    const timestamp = Date.parse(str);
    if (isNaN(timestamp)) return;
    return new Date(timestamp);
  };

  testHandler = (id, e) => {
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

  componentWillReceiveProps(nextProps) {
    // if (nextProps.data !== this.state.data) {
    if (true) {
      this.setState(() => ({
        data: nextProps.data,
        totalFeatured: nextProps.totalFeatured,
        busy: nextProps.busy,
      }));
    }
  }

  render() {
    const { busy, data, totalFeatured } = this.state;

    console.log('busy', busy);

    const style = busy ? { cursor: 'wait' } : { cursor: 'auto' };

    console.log('style', style);

    return (
      <div style={style}>
        {this.props.busy && <Backdrop />}
        <div>
          <div>
            Total Items: {data.length} | Total Featured: {totalFeatured}
          </div>
          {data.map((item, i) =>
            <DataLine
              key={item._id}
              onClick={this.testHandler.bind(null, item._id)}
              onChange={this.testHandler.bind(null, item._id)}
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
              <Button danger name="delete" disabled={this.props.busy}>
                Delete
              </Button>
            </DataLine>
          )}
        </div>
      </div>
    );
  }
}

export default AdminPanel;
