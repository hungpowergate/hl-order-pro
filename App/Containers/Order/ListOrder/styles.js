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
  tabbarLabel: {
    position: 'relative',
    // minWidth: 100
  },
  labelStl: {
    // color: Colors.black,
    fontFamily: 'Muli-Regular',
    textAlign: 'center',
    paddingHorizontal: 10
  },
  badge: {
    position: 'absolute',
    color: 'blue',
    top: -7,
    right: -7,
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
  },
  boxSum: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderTopWidth: 0.5,
    borderTopColor: '#828282',
    justifyContent: 'flex-end'
  },
  textSum: {
    fontFamily: 'Muli-Regular',
    fontSize: 10,
    color: '#000',
    textAlign: 'right'
  }
})