import { StyleSheet } from 'react-native';

import { Colors } from '~/Themes';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.darkGray,
    marginBottom: 25

  },
  colLeft: {

  },
  colRight: {
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  textTitle: {
    fontFamily: 'Muli-Regular',
    color: Colors.black,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.24,
    marginBottom: 25
  },
  number: {
    fontFamily: 'Muli-Semibold',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.24
  },
  indicatorStl: {
    backgroundColor: Colors.black,
    textTransform: 'lowercase'
  }  
})