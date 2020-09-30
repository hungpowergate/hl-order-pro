import React, { Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { commom } from '~/Themes';
import Menu from './Menu/MenuComponent';
import Slider from './Slider/SliderComponent';
import WebviewCustom from '~/Components/WebviewCustom/WebviewCustomComponent';
import CodeInformationModal from '~/Components/CodeInformationModal/CodeInformationModal';
import PaymentInformationModal from '~/Components/PaymentInfomationModal/PaymentInformationModal';

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

    return (
      <SafeAreaView style={commom.safeArea}>
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