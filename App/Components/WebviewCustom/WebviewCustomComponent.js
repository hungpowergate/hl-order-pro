import React, { Component } from 'react';
import { 
  View, 
  Text, 
  Modal,
  TouchableHighlight 
} from 'react-native';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';

import Style from './WebviewCustomComponentStyle';

export default class WebviewCustom extends Component {
  render() {
    const { url, isShow } = this.props;

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isShow}
        onRequestClose={() => {
          console.log("Modal has been closed.");
        }}
      >
        <View style={Style.header}>
          <TouchableHighlight onPress={() => this.props.close()}>
            <Text>Close</Text>
          </TouchableHighlight>
        </View>
        <WebView source={{ uri: url }}/>
      </Modal>      
    )
  }
}

WebviewCustom.propTypes = {
  url: PropTypes.string,
  close: PropTypes.func,
  isShow: PropTypes.bool
}