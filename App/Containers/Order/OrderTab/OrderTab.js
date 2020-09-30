import React, { Component } from 'react';
import {
  View,  
  FlatList,
  RefreshControl
} from 'react-native';

import { commom } from '~/Themes';
import OrderItem from '~/Components/OrderItem/OrderItem';
import WebviewCustom from '~/Components/WebviewCustom/WebviewCustomComponent';

class OrderTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      listOrder: [],
      webViewConfig: {
        url: '',
        isShow: false
      }
    }
  }

  componentDidMount() {
    const mocks = [];
    for (let i = 0; i < 1; i++) {
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
    this.props.viewOrder(order);
  }

  refreshListOrder() {
    
  }

  openWebView(url) {
    this.setState({
      webViewConfig: {
        url,
        isShow: true
      }
    })
  }

  closeWebView() {
    this.setState({
      webViewConfig: {
        url: '',
        isShow: false
      }
    })
  }

  render() {
    const { listOrder, refreshing, webViewConfig } = this.state;

    const renderItem = ({item}) => (
      <OrderItem 
        order={item} 
        isAdmin={true} 
        openWebView={url => this.openWebView(url)}
        view={() => this.viewOrder(item)} 
      />
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

        <WebviewCustom
          close={() => this.closeWebView()}
          url={webViewConfig.url}
          isShow={webViewConfig.isShow}
        />
      </View>
    )
  }
}

export default OrderTab;