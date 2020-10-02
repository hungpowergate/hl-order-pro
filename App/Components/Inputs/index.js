import React, {PureComponent} from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors, Images } from '~/Themes'
import styles from './styles';

class InputDefault extends PureComponent {

  
  render() {
    const { containerStl, inputWrapStl, inputStl, label, iconRight, submit, monney, hasLabel, hasError, textError, placeholder, ...props} = this.props
    return (
      <View style={[styles.container, containerStl]}>
        {
          label ? <Text style={styles.label}>{label}</Text> : null
        }
        
        <View style={[styles.inputWrap, inputWrapStl]}>
          <TextInput 
            placeholder={placeholder}
            placeholderTextColor={Colors.placeholderTextColor}
            style={[styles.input, inputStl]} 
            {...props}
          />
          {
            monney ? <Text style={styles.monney}>Đ</Text> : null
          }
          {iconRight ? 
          <View style={styles.iconRight}>
            <TouchableOpacity style={{padding: 10}}  onPress={submit}>
              <Image source={Images.searchIcon} style={{width: 17, height: 17}} /> 
            </TouchableOpacity>
          </View>
            : null
             }
        </View>
        
        {
          hasError ? <Text style={styles.error}>{}</Text> : null
        }
      </View>
    )
  }
}

export default InputDefault;