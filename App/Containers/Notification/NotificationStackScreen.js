import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SCREEN } from '~/Services/NavigationService';
import ListNotificationScreen from './ListNotification/ListNotificationScreen';
import ListAdminNotificationScreen from './ListAdminNotification/ListAdminNotificationScreen';
import DetailNotificationScreen from './DetailNotification/DetailNotificationScreen';
const Stack = createStackNavigator();

export default class NotificationStackScreen extends Component {
  render() {
    return (
      <Stack.Navigator>        
        <Stack.Screen
          name={SCREEN.LIST_NOTIFICATION.NAME}
          component={ListNotificationScreen}
          options={{ 
            title: SCREEN.LIST_NOTIFICATION.TITLE
          }}
        />
        <Stack.Screen
          name={SCREEN.DETAIL_NOTIFICATION.NAME}
          component={DetailNotificationScreen}
          options={{ 
            title: SCREEN.DETAIL_NOTIFICATION.TITLE
          }}
        />
        <Stack.Screen
          name={SCREEN.LIST_ADMIN_NOTIFICATION.NAME}
          component={ListAdminNotificationScreen}
          options={{ 
            title: SCREEN.LIST_ADMIN_NOTIFICATION.TITLE
          }}
        />
      </Stack.Navigator>
    )
  }
}
