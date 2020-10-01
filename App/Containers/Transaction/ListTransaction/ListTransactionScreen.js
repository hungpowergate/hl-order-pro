import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Dimensions,
} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { SafeAreaView } from 'react-native-safe-area-context';

import { commom } from '~/Themes';
import styles from "./ListTransactionScreenStyle";
import TransactionTab from '~/Containers/Transaction/ListTransaction/TransactionTab/TransactionTab';
import TransactionFilter from '~/Containers/Transaction/ListTransaction/TransactionFilter/TransactionFilter';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicatorStl}
    style={styles.tabBarStl}
    labelStyle={styles.labelStl}
    renderLabel={({ route, focused, color }) => (
      <Text style={styles.labelStl}>
        {route.title}
      </Text>
    )}
  />
)

const renderScene = SceneMap({
  all: () => <TransactionTab/>,
  recharge: () => <TransactionTab/>,
  pay: () => <TransactionTab/>
})

class ListTransactionScreen extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { 
          key: 'all', 
          title: 'Tất cả' 
        },
        { 
          key: 'recharge', 
          title: 'Nạp tiền' 
        },
        { 
          key: 'pay', 
          title: 'Thanh toán' 
        }
      ],
      filter: {
        isShow: false,
        isFiltering: false,
        query: {
          startDate: '09/07/2020',
          endDate: '09/07/2020'
        }
      }
    }
  }

  toggleFilter() {
    const { filter } = this.state;
    filter.isShow = !filter.isShow;
    this.setState({filter});
  }

  setFilter(newQuery) {
    let { filter } = this.state;
    let query = filter.query;
    query = Object.assign(query, newQuery);
    this.setState({
      filter: {
        ...filter,
        query
      }
    })
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      headerLeft: () =>  (
        <Button title="Filter" onPress={() => this.toggleFilter()} />
      )
    })
  }

  render() {
    const { index, routes, filter } = this.state;
    const initialLayout = { 
      width: Dimensions.get('window').width 
    }

    return (
      // <SafeAreaView style={commom.safeArea}>
        <View style={[commom.container, commom.p0]}>
          <TabView          
            renderTabBar={renderTabBar}
            style={commom.flex_1}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={index => this.setState({index})}
            initialLayout={initialLayout}
            getLabelText={({ route }) => route.title}
          />
          <TransactionFilter 
            option={filter}
            setFilter={(query) => this.setFilter(query)}/>
        </View>
      // </SafeAreaView>
    )
  }
}

export default ListTransactionScreen;