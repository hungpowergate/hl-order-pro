import React, { Component } from 'react';
import {
  View,
  ActivityIndicator
} from 'react-native';

import styles from './LoadingStyle';
import { Colors } from '~/Themes';

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small" color={Colors.black} />
      </View>
    )
  }
}
