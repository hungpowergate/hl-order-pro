import { StyleSheet } from 'react-native';

import { Colors } from '~/Themes';

export default StyleSheet.create({
  wrapInputImg: {
    backgroundColor: 'white',
    color: 'red',
    borderWidth: 0.5,
    borderColor: Colors.inputBorder,
    borderRadius: 5,
    // height: 44,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  cameraIcon: {
    width: 60,
    height: 45
  },
  inputLabel: {
    fontFamily: 'Muli-Regular',
    fontSize: 14,
    lineHeight: 20,
    lineHeight: -0.24,
    color: '#000000',
    marginBottom: 5
  },
  inputStl: {
    height: 60
  },
  btnSubmit: {
    borderRadius: 10,
    marginTop: 20
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