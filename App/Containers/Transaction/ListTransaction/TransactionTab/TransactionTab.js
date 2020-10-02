import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  RefreshControl
} from 'react-native';

import { commom } from '~/Themes';
import styles from './TransactionTabStyle';
import Loading from '~/Components/Loading/Loading';
import LoadingMore from '~/Components/LoadingMore/LoadingMore';
import TransactionItem from '~/Components/TransactionItem/TransactionItem';
import { getList as getListTransaction } from '~/Services/TransactionService'; 

class TransactionTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCalling: false,
      refreshing: false,
      listTransaction: [],
      isLoadmoring: false
    }
  }

  async componentDidMount() {
    this.setState({
      isCalling: true
    })

    const listTransaction = await this.getTransaction();
    this.setState({
      listTransaction,
      isCalling: false
    })
  }

  async getTransaction(isRefresh = false) {
    const { listTransaction } = this.state;
    return await getListTransaction(isRefresh ? 0 : listTransaction.length);
  }

  viewTransaction(transaction) {
    
  }
  

  async loadMoreResults(info) {
    const { isLoadmoring } = this.state;
    if (isLoadmoring) {
      return;
    }

    this.setState({
      isLoadmoring: true
    }, async () => {
      const loadMoreTransaction = await this.getTransaction();
      const { listTransaction } = this.state;
      this.setState({
        isLoadmoring: false,
        listTransaction: listTransaction.concat(loadMoreTransaction)
      })
    })    
  }

  async refreshListTransaction() {
    const listTransaction = await this.getTransaction(true);
    this.setState({
      listTransaction
    })    
  }

  render() {
    const { listTransaction, refreshing, isCalling, isLoadmoring } = this.state;    

    const renderItem = ({item}) => (
      <TransactionItem transaction={item} view={() => this.viewTransaction(item)} />
    )
  
    return (
      <View style={commom.flex_1}>
        <HeaderList/>
        { isCalling ? <Loading/> : (
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
            onEndReachedThreshold={0.01}
            onEndReached={info => this.loadMoreResults(info)}
          />
        ) }

        { isLoadmoring ? (
          <LoadingMore/>
        ) : null }
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