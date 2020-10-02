import React from 'react';
import { 
  Text, View
} from 'react-native';

import { Colors, commom } from '~/Themes';

const OrderStatus = (props) => {
  const {status, color} = props
  return (
    <View style={[commom.status, {backgroundColor: color}]}>
      <Text style={commom.statusText}>{status}</Text>
    </View>
  )
}

export default OrderStatus;