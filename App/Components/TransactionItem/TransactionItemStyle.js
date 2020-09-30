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
  
  itemTitle: {
    fontFamily: 'Muli-Semibold',
    fontSize: 13,
    color: Colors.gray,
    letterSpacing: -0.24,
    lineHeight: 20
  },
  itemDetail: {
    fontFamily: 'Muli-Semibold',
    fontSize: 12,
    color: Colors.black,
    letterSpacing: -0.24,
    lineHeight: 20
  },
  itemCreatedAt: {
    fontFamily: 'Muli-Regular',
    fontSize: 11,
    color: Colors.lightGray,
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