import { StyleSheet } from 'react-native';

import { Colors } from '~/Themes';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingTop: 35
  },
  inputSearch: {
    paddingRight: 30
  },
  tabBarStl: {
    backgroundColor: 'transparent',
    color: 'red'
  },
  labelStl: {
    // color: Colors.black,
    fontFamily: 'Muli-Regular'
  },
  badge: {
    position: 'absolute',
    color: 'blue',
    top: -10,
    right: -10,
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: Colors.pending,
    justifyContent: 'center',
    alignItems: 'center'
  },
  badgeNumber: {
    fontFamily: 'Muli-Regular',
    fontSize: 8,
    color: 'white'
  },
  indicatorStl: {
    backgroundColor: Colors.blue,
    textTransform: 'lowercase'
  }  
})