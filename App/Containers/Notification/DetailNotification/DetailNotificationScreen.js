import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

import ConfirmDeliverModal from '~/Components/ConfirmDeliverModal/ConfirmDeliverModal';
class DetailNotificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowConfirmModal: false
    }
  }

  confirmNotification() {
    this.setState({
      isShowConfirmModal: true
    })
  }

  render() {
    const { isShowConfirmModal } = this.state;

    return (
      <View>
        <Text>Detail Notification</Text>
        <Button title="Xác nhận" onPress={() => this.confirmNotification()} />
        <ConfirmDeliverModal isShow={isShowConfirmModal}/>
      </View>
    )
  }
}

export default DetailNotificationScreen;