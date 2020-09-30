import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

import Style from './TransactionItemStyle';
import { Colors } from '../../Themes';

export default class TransactionItem extends Component {

  render() {
    const { transaction } = this.props;
    const color = Colors.blue
    return (      
      <TouchableOpacity style={Style.item} onPress={() => this.props.view()}>
        <Image style={Style.itemImg} source={require('../../Assets/Images/logo.png')}/>
        <View style={Style.itemCenter}>
          <Text style={Style.itemTitle}>{transaction.title}</Text>
          <Text style={Style.itemDetail}>{transaction.detail}</Text>
        </View>
        <View>
          <Text style={Style.itemCreatedAt}>{transaction.createdAt}</Text>
          <Text style={[Style.itemMoney, {color: color}]}>{transaction.money}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

TransactionItem.propTypes = {
  transaction: PropTypes.object,
  view: PropTypes.func
}