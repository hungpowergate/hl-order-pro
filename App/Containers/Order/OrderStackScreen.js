import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SCREEN } from '~/Services/NavigationService';
import CreateOrderScreen from '~/Containers/Order/CreateOrder/CreateOrderScreen';
import EditOrderScreen from '~/Containers/Order/EditOrder/EditOrderScreen';
import DetailOrderScreen from '~/Containers/Order/DetailOrder/DetailOrderScreen';
import ListOrderScreen from '~/Containers/Order/ListOrder/ListOrderScreen';
const Stack = createStackNavigator();

export default class OrderStackScreen extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={SCREEN.CREATE_ORDER.NAME}
          component={CreateOrderScreen}
          options={{
            title: SCREEN.CREATE_ORDER.TITLE
          }}
        />
        <Stack.Screen
          name={SCREEN.EDIT_ORDER.NAME}
          component={EditOrderScreen}
          options={{
            title: SCREEN.EDIT_ORDER.TITLE
          }}
        />
        <Stack.Screen
          name={SCREEN.DETAIL_ORDER.NAME}
          component={DetailOrderScreen}
          options={{
            title: SCREEN.DETAIL_ORDER.TITLE
          }}
        />
        <Stack.Screen
          name={SCREEN.LIST_ORDER.NAME}
          component={ListOrderScreen}
          options={{
            title: SCREEN.LIST_ORDER.TITLE
          }}
        />
      </Stack.Navigator>
    )
  }
}
