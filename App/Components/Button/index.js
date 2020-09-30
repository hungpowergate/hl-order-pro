import React, {PureComponent} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

class ButtonDefault extends PureComponent {

  render() {
    const {onPress, containerStl, text, textStl, ...props} = this.props
    return (
      <TouchableOpacity style={[styles.container, containerStl]} onPress={onPress}>
         <Text style={[styles.text, textStl]}>{text}</Text>
         {this.props.children}
      </TouchableOpacity>
    )
  }
}

export default ButtonDefault;