import React from 'react';
import { 
  View, 
  Text,
  TextInput,
  Image
} from 'react-native';
import ValidationComponent from 'react-native-form-validator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Toast } from 'react-native-easy-toast';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { 
  WEBSITE, 
  STATUS_CODE 
} from '~/Constants/Config';
import MESSAGE from '~/Constants/Message';
import styles from './styles';
import { Colors, commom, Images } from '~/Themes';
import ButtonDefault from '~/Components/Button';
import { SCREEN } from '~/Services/NavigationService';
import { saveToken } from '~/Services/AuthService';
import { login as authLogin } from '~/Services/UserService';

export default class LoginScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isCallingApi: false
    }    
  }
  
  async login() {
    if (!this.validate({
      username: {
        required: true
      },
      password: {        
        required: true
      }
    })) {
      return;
    }

    const { isCallingApi, username, password } = this.state;
    if (isCallingApi) {
      return;
    }

    this.setState({
      isCallingApi: true
    })

    const res = await authLogin({
      username: username,
      password: password
    })

    if (res.status === STATUS_CODE.SUCCESS) {
      await saveToken(res.data.token); 
      this.props.navigation.navigate(SCREEN.MAIN.NAME);
    } else {
      // this.refs.toast.show('hello world!', 1000);
      this.setState({
        isCallingApi: false
      })      
    }
  }

  render() {
    const { username, password, isCallingApi } = this.state;

    return (
      <SafeAreaView style={commom.safeArea}>
        <KeyboardAwareScrollView contentContainerStyle={commom.flex_1}>
          <View style={[commom.container]}>
          <View style={styles.logoWrap}>
            <Image style={styles.logo} source={Images.logo}/>
          </View>
          <View style={styles.inputWrap}>
            <TextInput 
              placeholderTextColor={Colors.placeholder}
              style={styles.input} 
              value={username} 
              placeholder="Tên đăng nhập"
              onChangeText={text => this.setState({username: text})}
            />
            {this.isFieldInError('username') ? <Text style={styles.errorText}>{MESSAGE.USERNAME_REQUIRED}</Text> : null}
          </View>
          <View style={styles.inputWrap}>
            <TextInput 
              placeholderTextColor={Colors.placeholder}
              style={styles.input} 
              value={password}
              ecureTextEntry={true}
              placeholder="Mật khẩu"
              onChangeText={text => this.setState({password: text})}
            />        
            {this.isFieldInError('password') ? <Text style={styles.errorText}>{MESSAGE.PASSWORD_REQUIRED}</Text> : null}
          </View>
          <ButtonDefault             
            text="Đăng nhập" 
            isLoading={isCallingApi}
            onPress={() => {this.login()}}
            containerStl={styles.btnLogin}
          />
          <Text style={styles.textSmall}>
            Dùng tài khoản 
            <Text style={styles.textBold}> {WEBSITE.NAME} </Text>
            để đăng nhập
            </Text>
        </View>
        {/* <Toast ref="toast"/> */}
        </KeyboardAwareScrollView>        
      </SafeAreaView>
   
    )
  }
}