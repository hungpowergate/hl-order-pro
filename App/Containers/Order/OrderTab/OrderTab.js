import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  RefreshControl
} from 'react-native';
import PropTypes from 'prop-types';

import { commom } from '~/Themes';
import styles from './styles';
import OrderItem from '~/Components/OrderItem/OrderItem';

class OrderTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      listOrder: []
    }
  }

  componentDidMount() {
    const mocks = [];
    for (let i = 0; i < 20; i++) {
      mocks.push({
        id: i.toString(),
        image: 'werwe',
        name: `Túi Channel - black ${i}`,
        prices: '$58.00',
        status: 'Chờ duyệt',
        createdAt: '20/10/2020',
        isPay: 'Thanh toán'
      })
    }

    this.setState({
      listOrder: mocks
    })
  }

  viewOrder(order) {
    
  }

  refreshListOrder() {
    console.log('Loading!');
  }

  render() {
    const { listOrder, refreshing } = this.state;    

    const renderItem = ({item}) => (
      <OrderItem order={item} view={() => this.viewOrder(item)} />
    )
  
    return (
      <View style={commom.flex_1}>
        <FlatList
          data={listOrder}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          refreshControl={
            <RefreshControl
             refreshing={refreshing}
             onRefresh={() => this.refreshListOrder()}
            />
          }
        />
      </View>
    )
  }
}

export default OrderTab;
