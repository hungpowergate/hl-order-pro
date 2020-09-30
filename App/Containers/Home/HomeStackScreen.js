import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '~/Containers/Home/HomeScreen';
import { SCREEN } from '~/Services/NavigationService';
const Stack = createStackNavigator();

export default class HomeStackScreen extends Component {
  redirect(page) {
    this.props.navigation.navigate(page);
  }

  render() {
    return (
      <Stack.Navigator>        
        <Stack.Screen
          name={SCREEN.HOME.NAME}
          options={{ 
            headerShown: false,
            title: SCREEN.HOME.TITLE
          }}
        >
          {props => <HomeScreen {...props} redirect={(page) => this.redirect(page)}/>}
        </Stack.Screen>
      </Stack.Navigator>
    )
  }
}
