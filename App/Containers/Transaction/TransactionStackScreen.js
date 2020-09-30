import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SCREEN } from '~/Services/NavigationService';
import ListTransactionScreen from './ListTransaction/ListTransactionScreen';
const Stack = createStackNavigator();

export default class TransactionStackScreen extends Component {
  render() {
    return (
      <Stack.Navigator>        
        <Stack.Screen
          name={SCREEN.LIST_TRANSACTION.NAME}
          component={ListTransactionScreen}
          options={{ 
            title: SCREEN.LIST_TRANSACTION.TITLE            
          }}
        />
      </Stack.Navigator>
    )
  }
}
