import React, { Component } from 'react';
import {
  View,  
  FlatList,
  RefreshControl
} from 'react-native';

import { commom } from '~/Themes';
import { getList as getListOrder } from '~/Services/OrderService';
import Loading from '~/Components/Loading/Loading';
import LoadingMore from '~/Components/LoadingMore/LoadingMore';
import OrderItem from '~/Components/OrderItem/OrderItem';
import WebviewCustom from '~/Components/WebviewCustom/WebviewCustomComponent';

class OrderTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCalling: false,
      refreshing: false,
      listOrder: [],
      isLoadmoring: false,
      webViewConfig: {
        url: '',
        isShow: false
      }
    }
  }

  async componentDidMount() {
    this.setState({
      isCalling: true
    })

    const listOrder = await this.getOrder();
    this.setState({
      isCalling: false,
      listOrder
    })
  }

  viewOrder(order) {
    this.props.viewOrder(order);
  }

  async refreshListOrder() {
    const listOrder = await this.getOrder(true);
    this.setState({
      listOrder
    })   
  }

  async getOrder(isRefresh = false) {
    const { listOrder } = this.state;
    return await getListOrder(isRefresh ? 0 : listOrder.length);
  }

  async loadMoreResults(info) {
    const { isLoadmoring } = this.state;
    if (isLoadmoring) {
      return;
    }

    this.setState({
      isLoadmoring: true
    }, async () => {
      const loadMoreOrder = await this.getOrder();
      const { listOrder } = this.state;
      this.setState({
        isLoadmoring: false,
        listOrder: listOrder.concat(loadMoreOrder)
      })
    })    
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
    const { listOrder, refreshing, webViewConfig, isCalling, isLoadmoring } = this.state;

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
        {!isCalling ? (
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
            onEndReachedThreshold={0.01}
            onEndReached={info => this.loadMoreResults(info)}
          />
        ) : <Loading/>}

        <WebviewCustom
          close={() => this.closeWebView()}
          url={webViewConfig.url}
          isShow={webViewConfig.isShow}
        />

        {isLoadmoring ? <LoadingMore /> : null}        
      </View>
    )
  }
}

export default OrderTab;