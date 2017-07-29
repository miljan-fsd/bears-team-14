import React, { Component } from 'react';

import api from '../../fakeApi';
import FeaturedItems from '../FeaturedItems';
import ItemCard from '../ItemCard';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getItems();
  }

  async getItems() {
    let json = [];
    try {
      json = await api.getItems();
      this.setState(() => ({
        data: json.data,
      }));
    } catch (e) {
      console.error(e);
    }
  }
  render() {
		const { data } = this.state;
    return (
      <div>
        <FeaturedItems>
          {!!data.length
            ? data.map((item, i) =>
                <ItemCard key={item.id} {...item.info} expDate={item.expDate} />
              )
            : <div>Loading...</div>}
        </FeaturedItems>
      </div>
    );
  }
}

export default Home;
