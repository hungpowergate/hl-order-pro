import { StyleSheet } from 'react-native';

import { Colors } from '~/Themes';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white    
  },
  inputDate: {    
    width: 100,
    height: 50,
    margin: 6,
    borderWidth: 1,
    borderColor: 'black'
  },
  inputContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flexDirection: 'row',
  }
})