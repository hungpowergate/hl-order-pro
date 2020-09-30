import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Style from './ExampleComponentStyle';

class Example extends Component {
  render() {
    return (
      <View>
        <Text style={Style.title}>Example Component</Text>
      </View>
    )
  }
}

export default Example;