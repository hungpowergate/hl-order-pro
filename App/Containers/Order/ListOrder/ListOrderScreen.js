import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions
} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import {commom, Colors} from "~/Themes";
import InputDefault from '~/Components/Inputs';
import styles from './styles'
import OrderTab from '../OrderTab/OrderTab';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicatorStl}
    style={styles.tabBarStl}
    tabStyle={{width: 'auto'}}
    scrollEnabled={true}
    renderBadge={() => {}}
    renderLabel={({ route, focused, color }) => (
      <View style={styles.tabbarLabel}>
        <Text style={[styles.labelStl, {color: focused ? Colors.blue: Colors.black}  ]}>
          {route.title}
        </Text>
        <View style={styles.badge}>
          <Text style={styles.badgeNumber}>2</Text>
        </View>
      </View>
      
    )}
  />
)

const renderScene = SceneMap({
  all: () => <OrderTab/>,
  pending: () => <OrderTab/>,
  reported: () => <OrderTab/>,
  khoTQ: () => <OrderTab/>,
  khoVN: () => <OrderTab/>,
  doiSoat: () => <OrderTab/>,
  dangGoi: () => <OrderTab/>,
  dagiao: () => <OrderTab/>,
  danhan: () => <OrderTab/>,
  hoanthanh: () => <OrderTab/>,
  hangloi: () => <OrderTab/>,
  huydon: () => <OrderTab/>
})

export default class ListOrderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'all', title: 'Tất cả' },
        { key: 'pending', title: 'Chờ duyệt' },
        { key: 'reported', title: 'Đã báo' },
        { key: 'khoTQ', title: 'Đã về kho TQ' },
        { key: 'khoVN', title: 'Đã về kho VN' },
        { key: 'doiSoat', title: 'Đối soát' },
        { key: 'dangGoi', title: 'Đang gói hàng' },
        { key: 'dagiao', title: 'Đã giao hàng' },
        { key: 'danhan', title: 'Khách đã nhận' },
        { key: 'hoanthanh', title: 'Hoàn thành' },
        { key: 'hangloi', title: 'Hàng lỗi' },
        { key: 'huydon', title: 'Hủy đơn' }
      ]
    }
  }
  render() {
    const { index, routes } = this.state;
    const initialLayout = { 
      width: Dimensions.get('window').width 
    }

    return (
      <View style={[commom.container, styles.container]}>
         <InputDefault
          placeholder='Tìm kiếm đơn hàng' 
          iconRight
          inputWrapStl={styles.inputSearch}
          containerStl={commom.mx15}
        />
        <TabView      
          renderTabBar={renderTabBar}
          style={commom.flex_1}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={index => this.setState({index})}
          initialLayout={initialLayout}
          getLabelText={({ route }) => route.title}
        />
        <View style={styles.boxSum}>
          <Text style={styles.textSum}>Tổng tiền hàng: 50,000,000đ</Text>
        </View>
      </View>
    )
  }
}
