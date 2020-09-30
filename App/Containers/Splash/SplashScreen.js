import React, { Component } from 'react';
import {
  View
} from 'react-native';

import { SCREEN } from '~/Services/NavigationService';
import { isLogined } from '~/Services/AuthService';

class SplashScreen extends Component {
  async componentDidMount() {
    if (await isLogined()) {
      this.props.navigation.navigate(SCREEN.MAIN.NAME);
    } else {
      this.props.navigation.navigate(SCREEN.LOGIN.NAME);
    }
  }

  render() {
    return (
      <View>
          
      </View>
    );
  }
}

export default SplashScreen;