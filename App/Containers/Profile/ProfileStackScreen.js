import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SCREEN } from '~/Services/NavigationService';
import ProfleScreen from './Profile/ProfileScreen';
import ChangePasswordScreen from './ChangePassword/ChangePasswordScreen';
const Stack = createStackNavigator();

export default class ProfileStackScreen extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={SCREEN.PROFILE.NAME}
          component={ProfleScreen}
          options={{ 
            title: SCREEN.PROFILE.TITLE
          }}
        />
        <Stack.Screen
          name={SCREEN.CHANGE_PASSWORD.NAME}
          component={ChangePasswordScreen}
          options={{ 
            title: SCREEN.CHANGE_PASSWORD.TITLE
          }}
        />             
      </Stack.Navigator>
    )
  }
}
