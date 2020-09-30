import React, {PureComponent} from 'react';
import { 
  Text,
  ActivityIndicator,
  TouchableOpacity 
} from 'react-native';

import { Colors } from '~/Themes';
import styles from './styles';

class ButtonDefault extends PureComponent {

  render() {
    const {onPress, containerStl, text, textStl, isLoading, ...props} = this.props
    return (
      <TouchableOpacity style={[styles.container, containerStl]} onPress={onPress}>
        {isLoading ?  (<ActivityIndicator style={styles.loadingIcon} size="large" color={Colors.white} />) : null}
        <Text style={[styles.text, textStl]}>{text}</Text>
        {this.props.children}
      </TouchableOpacity>
    )
  }
}

export default ButtonDefault;