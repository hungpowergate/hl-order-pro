import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import ImagePicker from 'react-native-image-picker';

import styles from './styles';
import { Images, Colors } from '~/Themes';
import OrderStatus from '~/Components/OrderStatus';

export default class OrderItem extends Component {
  captureImage() {
    const options = {
      title: 'Chọn ảnh bao hàng',      
      takePhotoButtonTitle: 'Chụp ảnh',
      chooseFromLibraryButtonTitle: 'Chọn ảnh từ thư viện',
      cancelButtonTitle: 'Hủy'
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (!response.didCancel) {
        console.log('Close picker!');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
      }
    })
  }
  
  render() {
    const { order, isAdmin } = this.props;
    const colorStatus = Colors.pending;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.boxDetails} onPress={() => this.props.view(order)}>
          <Image
            style={styles.image}
            source={Images.product}
          />
          <View style={styles.colCenter}>
            <Text style={styles.idOrder}>ID: {order.id}</Text>
            <Text style={styles.name}>{order.name}</Text>
            <Text style={styles.name}>{order.prices}</Text>
          </View>
          <View style={styles.colRight}>
            <OrderStatus status={order.status} color={colorStatus}/>
            <Text style={styles.createAt}>{order.createdAt}</Text>
            <OrderStatus status={order.isPay} color={colorStatus}/>
          </View>
        </TouchableOpacity>
        
        {
          isAdmin ? 
            <View style={styles.boxScan}>
              <View style={styles.colScanLeft}>
                <TouchableOpacity style={styles.btnScan} onPress={() => this.props.openWebView(order.url)}>
                  <Text style={styles.textScan}>Mã vận đơn TQ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnScan} onPress={() => this.props.openWebView(order.url)}>
                  <Text style={styles.textScan}>Mã vận đơn VN</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.colScanCenter}>
                <TouchableOpacity style={styles.wrapCamera} onPress={() => this.captureImage()}>
                  <Text style={styles.textScan}>Chụp ảnh bao hàng</Text>
                  <Image style={styles.iconCamera} source={Images.cameraIcon}/>
                </TouchableOpacity>
              </View>
              <View style={styles.colScanRight}>
                <TouchableOpacity style={styles.btnScan} onPress={() => this.props.openWebView(order.url)}>
                  <Text style={styles.textScan}>Mã vận đơn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnScan} onPress={() => this.props.openWebView(order.url)}>
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
  showDetail: PropTypes.func,
  isAdmin: PropTypes.bool,
  openWebView: PropTypes.func
}