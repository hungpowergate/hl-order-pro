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
import OneSignal from 'react-native-onesignal';

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

    OneSignal.setLogLevel(6, 0);
  
    OneSignal.init("021c72fc-cc3b-4b74-9539-54f33a65d617", {kOSSettingsKeyAutoPrompt : false, kOSSettingsKeyInAppLaunchURL: false, kOSSettingsKeyInFocusDisplayOption:2});
    OneSignal.inFocusDisplaying(2); // Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.
    
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