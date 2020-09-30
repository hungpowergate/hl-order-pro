import { StyleSheet } from 'react-native';

import { Colors } from '../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },  
  logoWrap: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: '15%'
  },
  logo: {
    width: 184,
    height: 184,

  },
  inputWrap: {
    width: '100%',
    marginBottom: 15
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
    width: '100%',
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 2,
    fontSize: 16,
    fontFamily: 'Muli'
  },
  placeholderTextColor: {
    color: 'red'
  },
  errorText: {
    color: Colors.error,
    marginTop: 6
  },
  textSmall: {
    fontSize: 10,
    color: Colors.gray,
    textAlign: 'center'
  },
  btnLogin: {
    marginTop: 30,
    marginBottom: 15
  },
  textBold: {
    fontFamily: "Muli-Bold",
    color: Colors.black
  }
})