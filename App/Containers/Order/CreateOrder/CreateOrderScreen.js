import React, { Component } from 'react';
import {
  View,
  Text, Image, TouchableOpacity, Button
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { commom } from '../../../Themes';
import ButtonDefault from '~/Components/Button'
import InputDefault from '~/Components/Inputs'
import styles from './styles';


export default class CreateOrderScreen extends Component {
  
  render() {
    return (
      <KeyboardAwareScrollView contentContainerStyle={commom.flex_1}>
        <View style={commom.container}>
          <View style={commom.mt35}>
            <Text style={styles.inputLabel}>Hình ảnh sản phẩm</Text>
            <TouchableOpacity style={styles.wrapInputImg} onPress={() => alert('werwerw')}>
              <Image style={styles.cameraIcon} source={require('~/Assets/icons/camera.png')}/>
            </TouchableOpacity>
          </View>
          <InputDefault
            label='Tên sản phẩm' 
            placeholder='Tên sản phẩm'
            
          />
          <InputDefault
            inputWrapStl={commom.pr20}
            label='Giá sản phẩm' 
            placeholder='Giá sản phẩm'
            monney
            keyboardType='number-pad'
          />
          <InputDefault
            label='Mô tả sản phẩm' 
            placeholder='Mô tả sản phẩm'
            multiline="true"
            inputStl={styles.inputStl}
          />
          <ButtonDefault 
            text='Tạo đơn'
            containerStl={styles.btnSubmit}
          />
        </View>
      </KeyboardAwareScrollView>
    )
  }
}
