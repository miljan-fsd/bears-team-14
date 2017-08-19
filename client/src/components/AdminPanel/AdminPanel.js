import React, { Component } from 'react';

class AdminPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      totalFeatured: props.totalFeatured,
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
    if (nextProps.data !== this.state.data) {
      this.setState(() => ({
        data: nextProps.data,
        totalFeatured: nextProps.totalFeatured,
      }));
    }
  }

  render() {
    const { data, totalFeatured } = this.state;

    return (
      <div style={this.props.busy ? { cursor: 'wait' } : { cursor: 'default' }}>
        <div>
          Total Items: {data.length} | Total Featured: {totalFeatured}
        </div>
        {data.map((item, i) =>
          <div
            key={item._id}
            style={{ display: 'flex' }}
            onClick={this.testHandler.bind(null, item._id)}
            onChange={this.testHandler.bind(null, item._id)}
          >
            <div>
              {i + 1}&nbsp;-&nbsp;
            </div>
            <div>
              {item.info.title} at <strong>{item.companyName}</strong> |{' '}
              {item._id}
            </div>
            <input
              style={{ cursor: 'inherit' }}
              name="featured"
              type="checkbox"
              defaultChecked={item.isFeatured}
            />
            <input
              name="date"
              type="date"
              defaultValue={item.expDate.substr(0, 10)}
            />
            <button name="edit">Edit</button>
            <button
              style={{ cursor: 'inherit' }}
              name="delete"
              disabled={this.props.busy}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default AdminPanel;
