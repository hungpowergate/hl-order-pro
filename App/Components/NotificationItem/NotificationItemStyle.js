import { StyleSheet } from 'react-native';

import { Colors } from '../../Themes';

export default StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'rgba(196, 196, 196, 0.2)',
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  itemCenter: {
    paddingHorizontal: 10,
    flex: 1,
  },
  itemImg: {
    width: 32,
    height: 32
  },
  rowTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  itemTitle: {
    fontFamily: 'Muli-Semibold',
    fontSize: 13,
    color: '#3c3c3c',
    letterSpacing: -0.24,
    lineHeight: 20
  },
  itemDate: {
    fontFamily: 'Muli-Regular',
    fontSize: 11,
    color: '#111111',
    letterSpacing: -0.24,
    lineHeight: 20
  },
  itemDesc: {
    fontFamily: 'Muli-Regular',
    fontSize: 11,
    color: '#909090',
    letterSpacing: -0.24,
    lineHeight: 20
  },
  itemMoney: {
    fontFamily: 'Muli-Bold',
    fontSize: 12,
    color: Colors.lightGray,
    letterSpacing: -0.24,
    lineHeight: 20,
    color: Colors.red
  }
})