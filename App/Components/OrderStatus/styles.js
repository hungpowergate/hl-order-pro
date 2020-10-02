import { StyleSheet } from 'react-native';

import { Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    borderRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  text: {
    color: Colors.white,
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    letterSpacing: 0.24,
    fontFamily: "Muli-Semibold"
  },
  loadingIcon: {
    marginRight: 10
  }
})