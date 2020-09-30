import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Dimensions,
} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from "./ListTransactionScreenStyle";
import { commom } from '../../../Themes';
import TransactionTab from './TransactionTab/TransactionTab';

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
      ]
    }
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      headerLeft: () =>  (
        <Button title="Filter" onPress={() => alert('Show Filter')} />
      )
    })
  }

  render() {
    const { index, routes } = this.state;
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
        </View>
      // </SafeAreaView>
    )
  }
}

export default ListTransactionScreen;