import { StyleSheet } from 'react-native';

import { Colors } from '~/Themes';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  errorText: {
    color: Colors.error,
    marginTop: 6
  },
  input: {
    marginBottom: 0,
    marginTop: 20
  },
  btnUpdate: {
    marginTop: 20
  }
})