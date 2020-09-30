import React, {PureComponent} from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { Colors, Images } from '~/Themes'
import styles from './styles';

class InputDefault extends PureComponent {

  
  render() {
    const {containerStl, inputWrapStl, inputStl, label, iconRight, monney, hasLabel, hasError, textError, ...props} = this.props
    return (
      <View style={[styles.container, containerStl]}>
        {
          label ? <Text style={styles.label}>{label}</Text> : null
        }
        
        <View style={[styles.inputWrap, inputWrapStl]}>
          <TextInput 
            placeholderTextColor={Colors.placeholderTextColor}
            style={[styles.input, inputStl]} 
            {...props}
          />
          {
            monney ? <Text style={styles.monney}>Đ</Text> : null
          }
          {iconRight ? <Image style={styles.iconRight} source={Images.searchIcon} /> : null }
        </View>
        
        {
          hasError ? <Text style={styles.error}>{}</Text> : null
        }
      </View>
    )
  }
}

export default InputDefault;