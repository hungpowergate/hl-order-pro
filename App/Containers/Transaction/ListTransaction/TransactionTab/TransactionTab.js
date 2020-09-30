import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  RefreshControl
} from 'react-native';
import PropTypes from 'prop-types';

import { commom } from '~/Themes';
import styles from './TransactionTabStyle';
import TransactionItem from '~/Components/TransactionItem/TransactionItem';

class TransactionTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      listTransaction: []
    }
  }

  componentDidMount() {
    const mocks = [];
    for (let i = 0; i < 20; i++) {
      mocks.push({
        id: i.toString(),
        title: `Item ${i}`,
        detail: 'thanh toan abc',
        createdAt: '20/10/2020',
        money: '2500000'
      })
    }

    this.setState({
      listTransaction: mocks
    })
  }

  viewTransaction(transaction) {
    
  }

  refreshListTransaction() {
    console.log('Loading!');
  }

  render() {
    const { listTransaction, refreshing } = this.state;    

    const renderItem = ({item}) => (
      <TransactionItem transaction={item} view={() => this.viewTransaction(item)} />
    )
  
    return (
      <View style={commom.flex_1}>
        <HeaderList/>
        <FlatList
          data={listTransaction}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          refreshControl={
            <RefreshControl
             refreshing={refreshing}
             onRefresh={() => this.refreshListTransaction()}
            />
          }
        />
      </View>
    )
  }
}

export default TransactionTab;

const HeaderList = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.colLeft}>
        <Text style={styles.textTitle}>Tổng tiền đã nạp</Text>
        <Text style={[styles.number, commom.blue]}>5000000000đ</Text>
      </View>
      <View style={styles.colRight}>
        <Text style={styles.textTitle}>Số dư</Text>
        <Text style={[styles.number, commom.green]}>20.000.000.000đ</Text>
      </View>
    </View>
  )
}