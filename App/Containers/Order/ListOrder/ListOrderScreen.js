import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions
} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import styles from './styles'
import { ORDER_TYPE } from '~/Constants/Config';
import { commom, Colors } from "~/Themes";
import InputDefault from '~/Components/Inputs';
import { SCREEN } from '~/Services/NavigationService';
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
        <View style={[styles.badge, {backgroundColor: route.color}]}>
          <Text style={styles.badgeNumber}>2</Text>          
        </View>
      </View>
      
    )}
  />
)

const renderScene = SceneMap({
  all: () => <OrderTab type={ORDER_TYPE.all} viewOrder={order => this.viewOrder(order)}/>,
  pending: () => <OrderTab type={ORDER_TYPE.pending} viewOrder={order => this.viewOrder(order)}/>,
  reported: () => <OrderTab type={ORDER_TYPE.reported} viewOrder={order => this.viewOrder(order)}/>,
  khoTQ: () => <OrderTab type={ORDER_TYPE.khoTQ} viewOrder={order => this.viewOrder(order)}/>,
  khoVN: () => <OrderTab type={ORDER_TYPE.khoVN} viewOrder={order => this.viewOrder(order)}/>,
  doiSoat: () => <OrderTab type={ORDER_TYPE.doiSoat} viewOrder={order => this.viewOrder(order)}/>,
  dangGoi: () => <OrderTab type={ORDER_TYPE.dangGoi} viewOrder={order => this.viewOrder(order)}/>,
  dagiao: () => <OrderTab type={ORDER_TYPE.dagiao} viewOrder={order => this.viewOrder(order)}/>,
  danhan: () => <OrderTab type={ORDER_TYPE.danhan} viewOrder={order => this.viewOrder(order)}/>,
  hoanthanh: () => <OrderTab type={ORDER_TYPE.hoanthanh} viewOrder={order => this.viewOrder(order)}/>,
  hangloi: () => <OrderTab type={ORDER_TYPE.hangloi} viewOrder={order => this.viewOrder(order)}/>,
  huydon: () => <OrderTab type={ORDER_TYPE.huydon} viewOrder={order => this.viewOrder(order)}/>
})

export default class ListOrderScreen extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      querySearch: '',
      index: 0,
      routes: [
        { key: 'all', title: 'Tất cả', color: 'red' },
        { key: 'pending', title: 'Chờ duyệt', color: Colors.pending },
        { key: 'reported', title: 'Đã báo', color: Colors.pending },
        { key: 'khoTQ', title: 'Đã về kho TQ', color: Colors.pending },
        { key: 'khoVN', title: 'Đã về kho VN', color: Colors.pending },
        { key: 'doiSoat', title: 'Đối soát', color: Colors.pending },
        { key: 'dangGoi', title: 'Đang gói hàng', color: Colors.pending },
        { key: 'dagiao', title: 'Đã giao hàng', color: Colors.pending },
        { key: 'danhan', title: 'Khách đã nhận', color: Colors.pending },
        { key: 'hoanthanh', title: 'Hoàn thành', color: Colors.pending },
        { key: 'hangloi', title: 'Hàng lỗi', color: Colors.pending },
        { key: 'huydon', title: 'Hủy đơn', color: Colors.pending }
      ]
    }
  }

  viewOrder(order) {
    this.props.navigation.navigate(SCREEN.DETAIL_ORDER.NAME);
  }

  search() {
    const { query } = this.state;
    alert(query);
  }

  render() {
    const { index, routes, querySearch } = this.state;
    const initialLayout = { 
      width: Dimensions.get('window').width 
    }

    return (
      <View style={[commom.container, styles.container]}>
         <InputDefault
          placeholder='Tìm kiếm đơn hàng' 
          iconRight
          value={querySearch}
          onChangeText={text => this.setState({querySearch: text})}
          inputWrapStl={styles.inputSearch}
          containerStl={styles.inputContainer}
          submit={() => this.search()}
        />
        <TabView      
          renderTabBar={renderTabBar}
          style={commom.flex_1}
          lazy={true}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={index => this.setState({index})}
          initialLayout={initialLayout}
          getLabelText={({ route }) => route.title}
          lazy={true}
        />
        <View style={styles.boxSum}>
          <Text style={styles.textSum}>Tổng tiền hàng: 50,000,000đ</Text>
        </View>
      </View>
    )
  }
}
