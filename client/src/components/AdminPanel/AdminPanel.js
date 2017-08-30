import React, { Component } from 'react';

import {
  Backdrop,
  Button,
  CheckBox,
  FaButton,
  CompanyName,
  Controls,
  DataLine,
  FlipWithStyle,
  PositionDescription,
  TableHeader,
  TableWrapper,
  Wrapper,
} from './style';

const flipMoveOptions = {
  duration: 350,
  easing: 'ease-out',
  leaveAnimation: 'accordionVertical',
  enterAnimation: 'accordionVertical',
};

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

  componentDidMount() {
    window.scrollTo(0, 0);
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

  componentDidUpdate(prevProps, prevState) {
    // If filter switched scroll to top.
    if (prevState.showAll !== this.state.showAll) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { busy, data, featured, showAll } = this.state;

    const arr = showAll ? data : featured;

    return (
      <Wrapper>
        {busy && <Backdrop />}
        <Controls>
          <div>
            Total Items: {data.length} | Total Featured: {featured.length}{' '}
          </div>
          <Button onClick={this.showFeatured}>
            {showAll ? 'Show Featured' : 'Show All'}
          </Button>
        </Controls>
        <TableWrapper>
          <TableHeader>
            <div>Nr</div>
            <div>Company</div>
            <div>Position</div>
            <div>Featured</div>
            <div>Expiry Date</div>
          </TableHeader>
          <FlipWithStyle {...flipMoveOptions}>
            {arr.map((item, i) =>
              <DataLine
                key={item._id}
                onClick={this.handleClick.bind(null, item._id)}
                onChange={this.handleClick.bind(null, item._id)}
              >
                <div>
                  {i + 1}.&nbsp;
                </div>
                <CompanyName>
                  {item.companyName}
                </CompanyName>
                <PositionDescription>
                  {item.info.title}
                </PositionDescription>
                <CheckBox
                  name="featured"
                  defaultChecked={item.isFeatured}
                  title={item.isFeatured ? 'Featured' : 'Not featured'}
                />
                <input
                  name="date"
                  type="date"
                  defaultValue={item.expDate.substr(0, 10)}
                />
                <FaButton name="edit" title="Edit" disabled>
                  <i className="fa fa-pencil-square-o" aria-hidden="true" />
                </FaButton>
                <FaButton name="delete" title="Delete" danger>
                  <i className="fa fa-trash-o" aria-hidden="true" />
                </FaButton>
              </DataLine>
            )}
          </FlipWithStyle>
        </TableWrapper>
      </Wrapper>
    );
  }
}

export default AdminPanel;
