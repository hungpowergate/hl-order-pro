import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import { SCREEN } from '~/Services/NavigationService';
import styles from './MenuComponentStyle';

class Menu extends Component {
  render() {
    return (
      <View style={styles.menuContainer}>
        <View style={styles.rowBalance}>
          <Text>Số dư ví</Text>
          <Text style={styles.numberBalance}>5.000.000đ</Text>
        </View>
        <View style={styles.listMenu}>
          <TouchableHighlight style={styles.menuItem} onPress={() => this.props.payment()}>
            <Text>Nạp tiền</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.menuItem} onPress={() => this.props.scanCode()}>
            <Text>Quét mã</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.menuItem} onPress={() => this.props.redirectScreen(SCREEN.LIST_ORDER.NAME)}>
            <Text>Đơn hàng</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.menuItem} onPress={() => this.props.redirectScreen(SCREEN.TRANSACTION.NAME)}>
            <Text>Giao dịch</Text>
          </TouchableHighlight>
        </View>
      </View>      
    )
  }
}

export default Menu;

Menu.propTypes = {
  redirectScreen: PropTypes.func,
  payment: PropTypes.func,
  scanCode: PropTypes.func
}