import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import PropTypes from 'prop-types';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import styles from './TransactionFilterStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';

class TransactionFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '09/07/2020',
      endDate: '09/07/2020',
      isShowStartDate: false,
      isShowEndDate: false,
    }
  }

  setStartDate(date) {    
    this.setState({
      isShowStartDate: false,
    })

    this.props.setFilter({
      startDate: date.toString()
    })
  }

  setEndDate(date) {
    this.setState({
      isShowEndDate: false,
    })

    this.props.setFilter({
      endDate: date.toString()
    })
  }

  render() {
    const { option } = this.props;
    const { isShowStartDate, isShowEndDate } = this.state;

    return (
      <View style={[styles.container, {
        bottom: option.isShow ? 0 : -200
      }]}>
        <Text>Thời gian</Text>
        <TouchableOpacity onPress={() => this.setState({isShowStartDate: true})}>
          <Text>{option.query.startDate}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({isShowEndDate: true})}>
          <Text>{option.query.endDate}</Text>
        </TouchableOpacity>

        <DateTimePickerModal
          isVisible={isShowStartDate}
          mode="date"
          onConfirm={(date) => this.setStartDate(date)}          
          onCancel={() => console.log('close date')}
        />
        <DateTimePickerModal
          isVisible={isShowEndDate}
          mode="date"
          onConfirm={(date) => this.setEndDate(date)}          
          onCancel={() => console.log('close date')}
        />
        <Button 
          title="Áp dụng"
        />
        <Button 
          title="Bỏ lọc"
        />
      </View>
    )
  }
}

export default TransactionFilter;

TransactionFilter.propTypes = {
  option: PropTypes.object,
  setFilter: PropTypes.func
}