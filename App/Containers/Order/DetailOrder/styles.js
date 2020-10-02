import { StyleSheet } from 'react-native';

import { appStl, Colors } from '~/Themes';

export default StyleSheet.create({
  btnEdit: {
    fontFamily: appStl.fontRegular,
    fontSize: 12,
    color: Colors.gray
  },
  titleField: {
    fontFamily: appStl.fontBold,
    lineHeight: 20,
    letterSpacing: -0.24,
    color: '#000',
    fontSize: 16,
  },
  textField: {
    fontFamily: appStl.fontRegular,
    lineHeight: 20,
    letterSpacing: -0.24,
    color: '#000',
    fontSize: 16
  },
  box: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(130, 130, 130, 0.5)'
  },

  //steps
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  eachBox: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderColor: Colors.blue,
    borderWidth: 0.5,
  },
  dotActive: {
    backgroundColor: Colors.blue,
  },
  stepLabel: {
    fontFamily: appStl.fontRegular,
    fontSize: 10,
    textAlign: 'center',
    color: '#000000',
    position: 'absolute',
    width: 60,
    top: -15,
    left: -25
  },
  stepDivider: {
    height: 0.5,
    width: 60,
    backgroundColor: '#C4C4C4'
  },

  // history item
  historyItem: {
    paddingVertical: 8,
    borderBottomColor: 'rgba(130, 130, 130, 0.2)',
    borderBottomWidth: 1
  },
  historyDetails: {
    flexDirection: 'row',
  },
  historyLabel: {
    fontFamily: appStl.fontRegular,
    fontSize: 14,
    letterSpacing: -0.24,
    lineHeight: 20,
    color: '#111111'
  },
  historyTime: {
    fontFamily: appStl.fontRegular,
    fontSize: 12,
    letterSpacing: -0.24,
    lineHeight: 20,
    color: 'rgba(130, 130, 130, 0.5)'
  },
  
  boxButton: {
    paddingHorizontal: 15,
    paddingBottom: 35,
    paddingTop: 10,
    backgroundColor: 'white',
    borderTopColor: 'rgba(130, 130, 130, 0.2)',
    borderTopWidth: 1,
    flexDirection: 'row'
  },
  btnCancel: {
    borderWidth: 0.5,
    borderColor: '#F10101',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    flex: 1,
    marginRight: 8
  },
  btnCancelText: {
    color: '#F10101'
  },
  btnStatus: {
    borderRadius: 5, 
    flex: 1, 
    marginLeft: 8
  }

})