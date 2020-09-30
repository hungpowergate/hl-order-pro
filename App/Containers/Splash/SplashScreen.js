import React, { Component } from 'react';
import {
  View
} from 'react-native';

import { SCREEN } from '~/Services/NavigationService';
import { isLogined } from '~/Services/AuthService';

class SplashScreen extends Component {
  async componentDidMount() {
    const routerName = await isLogined() ? SCREEN.MAIN.NAME : SCREEN.LOGIN.NAME;
    this.props.navigation.replace(routerName);
  }

  render() {
    return (
      <View>
        
      </View>
    );
  }
}

export default SplashScreen;