import React, { Component } from 'react';
import {
  View,
  FlatList,
  TouchableHighlight
} from 'react-native';

import NotificationItem from '../../../Components/NotificationItem/NotificationItem';

class ListAdminNotificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNoti: []
    }
  }

  componentDidMount() {
    const mocks = [];
    for (let i = 0; i < 20; i++) {
      mocks.push({
        id: i.toString(),
        title: `Thong bao ${i}`
      })
    }

    this.setState({
      listNoti: mocks
    })    
  }

  viewNotification(notification) {
    alert(notification.id);
  }
  
  render() {
    const { listNoti } = this.state;

    return (
      <View>
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
    )
  }
}

export default ListAdminNotificationScreen;