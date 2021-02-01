import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button';
import ValidationComponent from 'react-native-form-validator';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

import styles from './ProfileScreenStyle';
import { Colors, commom, Images } from '~/Themes';
import MESSAGE from '~/Constants/Message';
import { SCREEN } from '~/Services/NavigationService';
import Button from '~/Components/Button';
import Input from '~/Components/Inputs';

class ProfileScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      birthDay: '',
      email: '',
      phone: '',
      address: '',
      sex: 0,
      isShowDate: false,
      isCalling: false
    }
  }

  changePassword() {
    this.props.navigation.navigate(SCREEN.CHANGE_PASSWORD.NAME);
  }

  update() {
    if (!this.validate({
      phone: {
        required: true
      },
      address: {        
        required: true
      },
      email: {        
        // email: true,
        required: true
      },
      birthDay: {        
        required: true
      }
    }) || this.state.isCalling) {
      return;
    }

    this.setState({
      isCalling: true
    })
  }

  setBirthDay(date) {
    this.setState({
      isShowDate: false,
      birthDay: moment(date).format('DD/MM/YYYY')
    })
  }
 
  render() {
    const { birthDay, email, phone, address, sex, isShowDate, isCalling } = this.state;

    return (
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}} enableOnAndroid={true} extraHeight={130} extraScrollHeight={130}>
        <View style={[commom.container, commom.pt30]}>
          <View style={commom.mb30}>
            <View style={styles.avatarWrap}>
              <View style={styles.avatar}>
                <ImageBackground source={Images.logo} style={styles.avatarImg}/>
              </View>
              <TouchableOpacity style={styles.cameraWrap} onPress={() => {}}>
                <Image source={Images.cameraIconGray} style={styles.camera}/>
              </TouchableOpacity>
            </View>

            <Text style={styles.userName}>User Name</Text>
          </View>

          <Text style={styles.formLabel}>Thông tin cá nhân </Text>

          <SelectSex
            val={sex}
            update={(val) => this.setState({sex: val})}
          />

        <TouchableOpacity onPress={() => this.setState({isShowDate: true})}>
          <Input
            containerStl={styles.input}
            value={birthDay}
            editable={false}
            onChangeText={text => this.setState({ birthDay: text })}
            placeholder="Ngày tháng/năm sinh"
          />
        </TouchableOpacity>        
        {this.isFieldInError('birthDay') ? <Text style={commom.errorText}>{MESSAGE.BIRTHDAY_REQUIRED}</Text> : null}

        <Input
          containerStl={styles.input}
          value={email}
          onChangeText={text => this.setState({ email: text })}
          placeholder="Email"
        />
        {this.isFieldInError('email') && this.getFailedRulesInField('email').includes('required') ? <Text style={commom.errorText}>{MESSAGE.EMAIL_REQUIRED}</Text> : null}
        {this.isFieldInError('email') && this.getFailedRulesInField('email').includes('email') ? <Text style={commom.errorText}>{MESSAGE.EMAIL_INVALID}</Text> : null}

        <Input
          containerStl={styles.input}
          value={phone}
          onChangeText={text => this.setState({ phone: text })}
          placeholder="Số điện thoại"
        />
        {this.isFieldInError('phone') ? <Text style={commom.errorText}>{MESSAGE.PHONE_REQUIRED}</Text> : null}

        <Input
          containerStl={styles.input}
          value={address}
          onChangeText={text => this.setState({ address: text })}
          placeholder="Địa chỉ"
        />
        {this.isFieldInError('address') ? <Text style={commom.errorText}>{MESSAGE.ADDRESS_REQUIRED}</Text> : null}

        <Button
          containerStl={commom.mt20}
          text="Cập nhật"
          isLoading={isCalling}
          onPress={() => this.update()}
        />
        <DateTimePickerModal
          isVisible={isShowDate}
          mode="date"
          onConfirm={(date) => this.setBirthDay(date)}
          onCancel={() => console.log('close date')}
        />

        <TouchableHighlight onPress={() => this.changePassword()}>
          <Text>Đổi mật khẩu</Text>
        </TouchableHighlight>
        </View>
      </KeyboardAwareScrollView>
    )
  }
}

export default ProfileScreen;

const sexOption = [
  {
    label: 'Nam',
    value: 0
  },
  {
    label: 'Nữ',
    value: 1
  }
]

const SelectSex = (props) => {
  return (
    <RadioForm
      formHorizontal={true}
      animation={true}
      initial={0}
    >
      {
        sexOption.map((obj, i) => (
          <RadioButton labelHorizontal={true} key={i} >
            <RadioButtonInput
              obj={obj}
              index={i}                  
              onPress={val => props.update(val)}
              borderWidth={2}
              isSelected={props.val === i}
              buttonInnerColor={Colors.black}                  
              buttonOuterColor={Colors.black}
              buttonSize={10}
              buttonOuterSize={20}
              buttonWrapStyle={{ marginLeft: 10 }}
            />
            <RadioButtonLabel
              obj={obj}
              index={i}
              labelHorizontal={true}
              onPress={val => props.update(val)}
              labelStyle={{ fontSize: 14, color: Colors.black }}
            />
          </RadioButton>
        ))
      }
    </RadioForm>
  )
}