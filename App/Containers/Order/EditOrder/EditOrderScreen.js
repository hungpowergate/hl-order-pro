import React from 'react';
import {
  View,
  Text, 
  Image, 
  TouchableOpacity, ImageBackground
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import ValidationComponent from 'react-native-form-validator';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';
import orderStl from '../styles';
import MESSAGE from '~/Constants/Message';
import { commom, Images } from '~/Themes';
import ButtonDefault from '~/Components/Button'
import InputDefault from '~/Components/Inputs'

export default class EditOrderScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: null,
      description: '',
      isCalling: false
    }
  }

  selectAvatar() {
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

  update() {
    if (!this.validate({
      name: {
        required: true
      },
      price: {        
        required: true
      },
      description: {        
        required: true
      }
    }) || this.state.isCalling) {
      return;
    }

    this.setState({
      isCalling: true
    })
  }

  render() {
    const { name, price, description, isCalling } = this.state;

    return (
      <KeyboardAwareScrollView contentContainerStyle={commom.flex_1}>
        <View style={commom.container}>
        
          <View style={commom.mt35}>
            <Text style={orderStl.inputLabel}>Hình ảnh sản phẩm</Text>
            <TouchableOpacity style={orderStl.wrapInputImg} onPress={() => this.selectAvatar()}>
              <Image style={orderStl.cameraIcon} source={require('~/Assets/icons/camera.png')}/>
            </TouchableOpacity>
          </View>

          <View style={orderStl.banner}>
            <ImageBackground source={Images.product} style={orderStl.imgBanner}/>
            <TouchableOpacity style={[orderStl.wrapInputImg, orderStl.cameraWrap]} onPress={() => this.selectAvatar()}>
              <Image style={orderStl.cameraIcon} source={require('~/Assets/icons/camera.png')}/>
            </TouchableOpacity>
            <View style={orderStl.textBannerWarp}>
              <Text style={orderStl.textBanner}>{price}</Text>
            </View>
          </View>

          <InputDefault
            value={name}
            onChangeText={text => this.setState({name: text})}
            label='Tên sản phẩm' 
            placeholder='Tên sản phẩm'
            containerStl={styles.input}
          />
          {this.isFieldInError('name') ? <Text style={styles.errorText}>{MESSAGE.EMAIL_REQUIRED}</Text> : null}

          <InputDefault
            value={price}
            onChangeText={text => this.setState({price: text})}
            inputWrapStl={commom.pr20}
            label='Giá sản phẩm' 
            placeholder='Giá sản phẩm'
            monney
            keyboardType='number-pad'
            containerStl={styles.input}
          />
          {this.isFieldInError('price') ? <Text style={styles.errorText}>{MESSAGE.PRICE_REQUIRED}</Text> : null}

          <InputDefault
            value={description}
            onChangeText={text => this.setState({description: text})}
            label='Mô tả sản phẩm' 
            placeholder='Mô tả sản phẩm'
            // multiline="true"
            inputStl={styles.inputStl}
            containerStl={styles.input}
          />
          {this.isFieldInError('description') ? <Text style={styles.errorText}>{MESSAGE.DESCRIPTION_REQUIRED}</Text> : null}

          <ButtonDefault 
            containerStl={styles.btnUpdate}
            onPress={() => this.update()}
            text='Cập nhật'
            isLoading={isCalling}
            containerStl={styles.btnSubmit}
          />
        </View>
      </KeyboardAwareScrollView>
    )
  }
}
