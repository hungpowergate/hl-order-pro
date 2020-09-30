import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import { SCREEN } from '../../../Services/NavigationService';

class ProfileScreen extends Component {
  changePassword() {
    this.props.navigation.navigate(SCREEN.CHANGE_PASSWORD.NAME);
  }

  render() {
    return (
      <View>
        <Text>ProfileScreen</Text>
        <TouchableHighlight onPress={() => this.changePassword()}>
          <Text>Change password</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default ProfileScreen;