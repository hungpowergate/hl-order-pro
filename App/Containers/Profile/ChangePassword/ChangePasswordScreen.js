import React from 'react';
import { 
  View,
  Text,
} from 'react-native';
import ValidationComponent from 'react-native-form-validator';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

import Button from '~/Components/Button';
import Input from '~/Components/Inputs';
import MESSAGE from '~/Constants/Message';
import { Colors, commom, Images } from '~/Themes';
import styles from './ChangePasswordScreenStyle';

class ChangePasswordScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      isCalling: false
    }
  }

  update() {
    if (!this.validate({
      oldPassword: {
        required: true
      },
      newPassword: {        
        required: true
      },
      confirmPassword: {        
        required: true
      }
    }) || this.state.isCalling) {
      return;
    }
  }

  render() {
    const { oldPassword, newPassword, confirmPassword, isCalling } = this.state;

    return (
      <KeyboardAwareScrollView>
        <View style={[commom.container, commom.pt30]}>
        <Input
          value={oldPassword}
          containerStl={styles.input}
          onChangeText={text => this.setState({oldPassword: text})}
          label="Mật khẩu hiện tại"
          placeholder="Nhập mật khẩu hiện tại"
        />
        {this.isFieldInError('oldPassword') ? <Text style={styles.errorText}>{MESSAGE.PASSWORD_REQUIRED}</Text> : null}

        <Input
          value={newPassword}
          containerStl={styles.input}
          onChangeText={text => this.setState({newPassword: text})}
          label="Mật khẩu mới"
          placeholder="Nhập mật khẩu mới"
        />
        {this.isFieldInError('newPassword') ? <Text style={styles.errorText}>{MESSAGE.PASSWORD_REQUIRED}</Text> : null}

        <Input
          containerStl={styles.input}
          value={confirmPassword}
          onChangeText={text => this.setState({confirmPassword: text})}
          label="Nhập lại mật khẩu mới"
          placeholder="Nhập lại mật khẩu mới"
        />
        {this.isFieldInError('confirmPassword') ? <Text style={styles.errorText}>{MESSAGE.PASSWORD_REQUIRED}</Text> : null}

        <Button
          containerStl={styles.btnUpdate}
          isLoading={isCalling}
          onPress={() => this.update()}
          text="Cập nhật mật khẩu"
        />
      </View>
      </KeyboardAwareScrollView>
    )
  }
}

export default ChangePasswordScreen;