import { StyleSheet } from 'react-native';

import { Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontFamily: 'Muli-Regular',
    fontSize: 14,
    lineHeight: 20,
    lineHeight: -0.24,
    color: '#000000',
    marginBottom: 5
  },
  inputWrap: {
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: Colors.inputBorder,
    borderRadius: 5,
    paddingHorizontal: 15,
    overflow: 'hidden',
    position: 'relative'
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 0,
    borderColor: 'transparent',
    fontFamily: 'Muli-Regular',
    color: Colors.inputText,
    fontSize: 14,
    height: 44,
  },
  monney: {
    fontFamily: 'Muli-Regular',
    fontSize: 14,
    color: '#000',
    position: 'absolute',
    right: 15,
    top: 13
  },
  iconRight: {
    width: 17,
    height: 17,
    position: 'absolute',
    right: 15,
    top: 13
  },
  error: {
    color: Colors.red,
    fontSize: 12
  }
})