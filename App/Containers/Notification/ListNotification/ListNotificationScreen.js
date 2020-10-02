import React, { Component } from 'react';
import {
  View,
  FlatList,
  RefreshControl,
  TouchableHighlight
} from 'react-native';

import { SCREEN } from '~/Services/NavigationService';
import { commom } from '~/Themes';
import { getList as getListNoti } from '~/Services/NotificationService';
import Loading from '~/Components/Loading/Loading';
import LoadingMore from '~/Components/LoadingMore/LoadingMore';
import NotificationItem from '~/Components/NotificationItem/NotificationItem';

class ListNotificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCalling: false,
      refreshing: false,
      listNoti: [],
      isLoadmoring: false
    }
  }

  async componentDidMount() {
    this.setState({
      isCalling: true
    })

    const listNoti = await this.getNotification();
    this.setState({
      listNoti,
      isCalling: false
    })       
  }

  async getNotification(isRefresh = false) {
    const { listNoti } = this.state;
    return await getListNoti(isRefresh ? 0 : listNoti.length);
  }

  viewNotification(notification) {
    this.props.navigation.navigate(SCREEN.DETAIL_NOTIFICATION.NAME, {
      id: notification.id
    })
  }

  async loadMoreResults(info) {
    const { isLoadmoring } = this.state;
    if (isLoadmoring) {
      return;
    }

    this.setState({
      isLoadmoring: true
    }, async () => {
      const loadMoreNoti = await this.getNotification();
      const { listNoti } = this.state;
      this.setState({
        isLoadmoring: false,
        listNoti: listNoti.concat(loadMoreNoti)
      })
    })    
  }

  async refreshListNoti() {
    const listNoti = await this.getNotification(true);
    this.setState({
      listNoti
    })    
  }
  
  render() {
    const { listNoti, isCalling, refreshing, isLoadmoring } = this.state;

    return (
      // <SafeAreaView style={commom.safeArea}>
        <View style={[commom.container, commom.p0]}>

        { !isCalling ? (
          <FlatList          
            data={listNoti}
            renderItem={({ item, index, separators }) => (
              <TouchableHighlight
                key={item.key}
                onPress={() => this.viewNotification(item)}
                onShowUnderlay={separators.highlight}
                onHideUnderlay={separators.unhighlight}>
                <NotificationItem/>
              </TouchableHighlight>
            )}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => this.refreshListNoti()}
              />
            }
            onEndReachedThreshold={0.01}
            onEndReached={info => this.loadMoreResults(info)}
          />
        ) : <Loading/> }

        { isLoadmoring ? (
          <LoadingMore/>
        ) : null }  
        </View>

      // </SafeAreaView>
    )
  }
}

export default ListNotificationScreen;