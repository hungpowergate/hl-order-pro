import React, { Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {ScrollView, 
  View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import ImageSlider from 'react-native-image-slider';

import { commom, Images } from '~/Themes';
import Menu from './Menu/MenuComponent';
import Slider from './Slider/SliderComponent';
import WebviewCustom from '~/Components/WebviewCustom/WebviewCustomComponent';
import CodeInformationModal from '~/Components/CodeInformationModal/CodeInformationModal';
import PaymentInformationModal from '~/Components/PaymentInfomationModal/PaymentInformationModal';
import styles from './HomeStyle';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowWebview: false,
      isShowPayment: false,
      isShowCode: false,
      url: 'https://reactnative.dev/',
      listProduct: []
    }
  }

  componentDidMount() {
    this.setState({
      listProduct: mocks
    })
  }

  seeMore() {
    alert('seeMore');
  }

  toggleWebview(status) {
    this.setState({
      isShowWebview: status
    })
  }

  showProduct() {
    this.setState({
      isShowWebview: true
    })
  }  

  render() {
    const { isShowWebview, url, isShowPayment, isShowCode, listProduct } = this.state;
    const images = [
      '~/Assets/Images/img-slider.png',
      '~/Assets/Images/img-slider.png',
      '~/Assets/Images/img-slider.png',
    ]
    return (
      <SafeAreaView style={[commom.safeArea, styles.safeArea]}>
      {/* <StatusBar barStyle="dark-content" backgroundColor="#6a51ae" /> */}
        <ScrollView style={styles.container}>

        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <View style={styles.avatar}>
              <Image source={Images.logo} style={styles.imgAvt}/>
            </View>
            <View style={styles.colCenter}>
              <Text style={styles.hello}>Xin chào,</Text>
              <Text style={styles.userName}>User name</Text>
            </View>
            <TouchableOpacity style={styles.wrapNotiIcon} onPress={() => {}}>
              <View style={styles.badge}>
                <Text style={styles.notiNumber}>23</Text>
              </View>
              <Image source={Images.notiHeaderIcon} style={styles.iconNoti}/>
            </TouchableOpacity>
          </View>
          <View style={styles.carouselWrap}>
            <ImageSlider
              loopBothSides
              autoPlayWithInterval={2000}
              images={images}
              customSlide={({ index, item, style, width }) => (
                <View key={index} style={[style, styles.customSlide]}>
                  <Image source={{ uri: item }} style={styles.customImage} />
                </View>
              )}
            />
          </View>

        </View>

        <Menu
          scanCode={() => this.setState({isShowCode: true})}
          payment={() => this.setState({isShowPayment: true})}
          redirectScreen={(page) => this.props.redirect(page)}
        />
        
        <Slider
          title="HÀNG ORDER"
          seeMore={() => this.seeMore()}
          showProduct={product => this.showProduct(product)}
          listProduct={listProduct}
        />

        <WebviewCustom 
          url={url} 
          isShow={isShowWebview} 
          close={() => this.toggleWebview(false)}
        />

        <PaymentInformationModal 
          isShow={isShowPayment}
        />

        <CodeInformationModal 
          isShow={isShowCode}
        />
        </ScrollView>

      </SafeAreaView>      
    )
  }
}

export default HomeScreen;

const mocks = [{
  id: 1, 
  label: 'LV', 
  code: '0001', 
  desc: 'Ví cầm tay nam thương hiệu LV',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'
}, {
  id: 2, 
  label: 'LV', 
  code: '0002', 
  desc: 'Ví cầm tay nam thương hiệu LV',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'
}, {
  id: 3, 
  label: 'LV', 
  code: '0003', 
  desc: 'Ví cầm tay nam thương hiệu LV',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'
}, {
  id: 4, 
  label: 'LV', 
  code: '0004', 
  desc: 'Ví cầm tay nam thương hiệu LV',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'
}]