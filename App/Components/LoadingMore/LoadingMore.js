import React, { Component } from 'react';
import {
  View,
  ActivityIndicator
} from 'react-native';

import { Colors } from '~/Themes';
import styles from './LoadingMoreStyle';

export default class LoadingMore extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small" color={Colors.black} />
      </View>
    )
  }
}
