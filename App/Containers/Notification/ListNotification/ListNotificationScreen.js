import React, { Component } from 'react';
import {
  View,
  FlatList,
  TouchableHighlight
} from 'react-native';

import { STATUS_CODE } from '~/Constants/Config';
import { SCREEN } from '~/Services/NavigationService';
import { commom } from '~/Themes';
import NotificationItem from '~/Components/NotificationItem/NotificationItem';
import { getList as getListNotification } from '~/Services/NotificationService';

class ListNotificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNoti: []
    }
  }

  async componentDidMount() {
    const res = await getListNotification();
    if (res.status === STATUS_CODE.SUCCESS) {
      this.setState({
        listNoti: res.data
      })
    }        
  }

  viewNotification(notification) {
    this.props.navigation.navigate(SCREEN.DETAIL_NOTIFICATION.NAME, {
      id: notification.id
    })
  }
  
  render() {
    const { listNoti } = this.state;

    return (
      // <SafeAreaView style={commom.safeArea}>
        <View style={[commom.container, commom.p0]}>

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
        />
        </View>

      // </SafeAreaView>
    )
  }
}

export default ListNotificationScreen;