import React, { Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {ScrollView, 
  View, Text, Image, TouchableOpacity, StatusBar, Dimensions} from 'react-native';
import Carousel, { Pagination, ParallaxImage } from 'react-native-snap-carousel';

import { commom, Images } from '~/Themes';
import Menu from './Menu/MenuComponent';
import Slider from './Slider/SliderComponent';
import WebviewCustom from '~/Components/WebviewCustom/WebviewCustomComponent';
import CodeInformationModal from '~/Components/CodeInformationModal/CodeInformationModal';
import PaymentInformationModal from '~/Components/PaymentInfomationModal/PaymentInformationModal';
import styles from './HomeStyle';
const { width: screenWidth } = Dimensions.get('window')
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowWebview: false,
      isShowPayment: false,
      isShowCode: false,
      url: 'https://reactnative.dev/',
      listProduct: [],
      imgCarousel: [
        {uri: require('~/Assets/Images/img-slider.png')},
        {uri: require('~/Assets/Images/img-slider.png')},
        {uri: require('~/Assets/Images/img-slider.png')}
      ],
      activeSlide: 0
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

  _renderItemSlides = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={item.uri}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
    </View>
    );
  }

  get pagination () {
    const { imgCarousel, activeSlide } = this.state;
    return (
        <Pagination
          dotsLength={imgCarousel.length}
          activeDotIndex={activeSlide}
          containerStyle={styles.pagination}
          dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.92)'
          }}
          inactiveDotStyle={{
              // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={1}
        />
    );
}


  render() {
    const { isShowWebview, url, isShowPayment, isShowCode, listProduct } = this.state;
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
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.imgCarousel}
              renderItem={this._renderItemSlides}
              onSnapToItem={(index) => this.setState({ activeSlide: index }) }
              sliderWidth={screenWidth}
              sliderHeight={162}
              itemWidth={screenWidth - 30}
              hasParallaxImages={true}
            />
            <View style={styles.paginationWrap}>
              { this.pagination }
            </View>
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