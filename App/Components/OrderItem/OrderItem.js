import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { Images, Colors } from '~/Themes';

export default class OrderItem extends Component {
  state = {
    isAdmin: true
  }
  render() {
    const { order } = this.props;
    const colorStatus = Colors.pending
    return (
      <View style={styles.container}>
        
        <TouchableOpacity style={styles.boxDetails} onPress={() => this.props.showDetail(order)}>
          <Image
            style={styles.image}
            source={Images.logo}
          />
          <View style={styles.colCenter}>
            <Text style={styles.idOrder}>ID: {order.id}</Text>
            <Text style={styles.name}>{order.name}</Text>
            <Text style={styles.name}>{order.prices}</Text>
          </View>
          <View style={styles.colRight}>
            <View style={[styles.status, {backgroundColor: colorStatus}]}>
              <Text style={styles.statusText}>{order.status}</Text>
            </View>
            <Text style={styles.createAt}>{order.createdAt}</Text>
            <View style={[styles.status, {backgroundColor: colorStatus}]}>
              <Text style={styles.statusText}>{order.isPay}</Text>
            </View>
          </View>
        </TouchableOpacity>
        
        {
          this.state.isAdmin ? 
            <View style={styles.boxScan}>
              <View style={styles.colScanLeft}>
                <TouchableOpacity style={styles.btnScan}>
                  <Text style={styles.textScan}>Mã vận đơn TQ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnScan}>
                  <Text style={styles.textScan}>Mã vận đơn VN</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.colScanCenter}>
                <TouchableOpacity style={styles.wrapCamera}>
                  <Text style={styles.textScan}>Chụp ảnh bao hàng</Text>
                  <Image style={styles.iconCamera} source={Images.cameraIcon}/>
                </TouchableOpacity>
              </View>
              <View style={styles.colScanRight}>
                <TouchableOpacity style={styles.btnScan}>
                  <Text style={styles.textScan}>Mã vận đơn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnScan}>
                  <Text style={styles.textScan}>Mã bao hàng</Text>
                </TouchableOpacity>
              </View>
            </View>
          : null
        }
     
     </View>

    )
  }
}

OrderItem.propTypes = {
  order: PropTypes.object,
  showDetail: PropTypes.func
}