import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity
} from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import styles from './TransactionFilterStyle';

class TransactionFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      isShowStartDate: false,
      isShowEndDate: false,
    }
  }

  setStartDate(date) {
    this.setState({
      isShowStartDate: false,
    })

    this.props.setFilter({
      startDate: moment(date).format('DD/MM/YYYY')
    })
  }

  setEndDate(date) {
    this.setState({
      isShowEndDate: false,
    })

    this.props.setFilter({
      endDate: moment(date).format('DD/MM/YYYY')
    })
  }

  openStartDate() {
    this.setState({
      isShowStartDate: true 
    })
  }

  openEndDate() {
    this.setState({
      isShowEndDate: true 
    })
  }

  render() {
    const { option } = this.props;
    const { isShowStartDate, isShowEndDate } = this.state;

    return (
      <View style={styles.container}>
        <Text>Thời gian</Text>
        <View style={styles.inputContainer}>          
          <TouchableOpacity style={styles.inputDate} onPress={() => this.openStartDate()}>
            <Text>{option.query.startDate ? option.query.startDate : '--/--/----'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inputDate} onPress={() => this.openEndDate()}>
            <Text>{option.query.endDate ? option.query.endDate : '--/--/----'}</Text>
          </TouchableOpacity>
        </View>        

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
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.search()}
            title="Áp dụng"
          />
          <Button 
            onPress={() => this.props.reset()}
            title="Bỏ lọc"
          />
        </View>        
      </View>
    )
  }
}

export default TransactionFilter;

TransactionFilter.propTypes = {
  option: PropTypes.object,
  setFilter: PropTypes.func
}