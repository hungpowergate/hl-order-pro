import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import PropTypes from 'prop-types';

import Style from './NotificationItemStyle';
import { commom } from '../../Themes';

class NotificationItem extends Component {
  render() {
    const { notification } = this.props;

    return (
      <View style={Style.item}>
        <Image style={Style.itemImg} source={require('../../Assets/Images/logo.png')}/>
        <View style={Style.itemCenter}>
          <View style={Style.rowTitle}>
            <Text style={Style.itemTitle}>{notification.title}</Text>
            <Text style={Style.itemDate}>{notification.date}</Text>
          </View>
          <View>
            <Text style={Style.itemDesc}>{notification.desc}</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default NotificationItem;

NotificationItem.propTypes = {
  notification: PropTypes.object
}

NotificationItem.defaultProps = {
  notification: {
    title: 'Vu Thanh Trung',
    desc: 'Đơn hàng đã tạo thành công',
    date: '09:00 - 24/10/2020'
  }
}