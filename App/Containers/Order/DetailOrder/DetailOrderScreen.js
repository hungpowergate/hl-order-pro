import React, { Component } from 'react';
import {
  View,
  Text, ScrollView, ImageBackground, Button
} from 'react-native';

import { SCREEN } from '~/Services/NavigationService';
import ButtonDefault from '~/Components/Button';
import { commom, Images, Colors } from '~/Themes';

import styles from './styles';
export default class DetailOrderScreen extends Component {

  componentDidMount() {
    this.props.navigation.setOptions({      
      headerRight: () =>  (
        <Button title="Chỉnh sửa" onPress={() => this.props.navigation.navigate(SCREEN.EDIT_ORDER.NAME)} />
      )
    })
  }
  render() {
    const {isAdmin} = this.props
    return (
      <View style={[commom.container, commom.px0]}>
        <ScrollView contentContainerStyle={commom.flex_1}>

          <View style={styles.banner}>
            <ImageBackground source={Images.product} style={styles.imgBanner}/>
            <View style={styles.textBannerWarp}>
              <Text style={styles.textBanner}>$25</Text>
            </View>
          </View>

          <View>
            <View style={styles.box}>
              <Text style={styles.titleField}>MÔ TẢ</Text>
              <Text style={styles.textField}>jung</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.titleField}>TRẠNG THÁI ĐƠN HÀNG</Text>
              {/* step component */}
              <View style={styles.stepContainer}>
                <View style={styles.eachBox}>
                  <Text style={[styles.stepLabel, {color: Colors.blue}]}>Đã báo</Text>
                  <View style={[styles.dot, styles.dotActive]}/>
                </View>
                <View style={styles.stepDivider}/>
                <View style={styles.eachBox}>
                  <Text style={[styles.stepLabel]}>Đã gửi</Text>
                  <View style={[styles.dot]}/>
                </View>
                <View style={styles.stepDivider}/>
                <View style={styles.eachBox}>
                  <Text style={[styles.stepLabel]}>Hàng ở HN</Text>
                  <View style={[styles.dot]}/>
                </View>
                <View style={styles.stepDivider}/>
                <View style={styles.eachBox}>
                  <Text style={[styles.stepLabel]}>Hoàn thành</Text>
                  <View style={[styles.dot]}/>
                </View>
              </View>
            </View>
            <View style={[styles.box, commom.noBorder]}>
              <Text style={styles.titleField}>LỊCH SỬ</Text>
              <View style={styles.historyItem}>
                <Text style={styles.historyLabel}>Junbag đã tạo đơn hàng</Text>
                <Text style={styles.historyTime}>23/09/2020 - 18:00</Text>
              </View>
              
              <View style={styles.historyItem}>
                <Text style={styles.historyLabel}>
                  Admin đã chuyển trạng thái đơn hàng: Đã lấy hàng
                </Text>
                <View style={styles.historyDetails}>
                  <Text>- Thay đổi </Text>
                  <View style={[commom.status, {backgroundColor: Colors.daBao}]}>
                    <Text style={commom.statusText}>Đã báo</Text>
                  </View>
                  <Text> thành </Text>
                  <View style={[commom.status, {backgroundColor: Colors.pending}]}>
                    <Text style={commom.statusText}>Chờ duyệt</Text>
                  </View>
                </View>
                <Text style={styles.historyTime}>23/09/2020 - 18:00</Text>
              </View>
              <View style={styles.historyItem}>
                <Text style={styles.historyLabel}>
                  Admin đã chuyển trạng thái đơn hàng: Đã lấy hàng
                </Text>
                <View style={styles.historyDetails}>
                  <Text>- Thay đổi </Text>
                  <View style={[commom.status, {backgroundColor: Colors.daBao}]}>
                    <Text style={commom.statusText}>Đã báo</Text>
                  </View>
                  <Text> thành </Text>
                  <View style={[commom.status, {backgroundColor: Colors.pending}]}>
                    <Text style={commom.statusText}>Chờ duyệt</Text>
                  </View>
                </View>
                <Text style={styles.historyTime}>23/09/2020 - 18:00</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        {
          isAdmin ?
          <View style={styles.boxButton}>
            <ButtonDefault 
              text='HỦY'
              containerStl={styles.btnCancel}
              textStl={styles.btnCancelText}
            />
            <ButtonDefault 
              text='ĐÃ BÁO'
              containerStl={styles.btnStatus}
            />
          </View>
          : 
          <View style={styles.boxButton}>
          <ButtonDefault 
            text='HỦY'
            containerStl={[styles.btnCancel, commom.mr0]}
            textStl={styles.btnCancelText}
          />
          </View>
        }
        
     
      </View>
    )
  }
}
