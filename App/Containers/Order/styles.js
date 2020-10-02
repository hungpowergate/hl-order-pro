import { StyleSheet } from 'react-native';

import { Colors, appStl } from '~/Themes';

export default StyleSheet.create({
  banner: {
    position: 'relative',
    height: 215
  },
  imgBanner: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  textBannerWarp: {
    backgroundColor: 'rgba(255, 255, 255, 0.74)',
    paddingVertical: 7,
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  textBanner: {
    fontFamily: appStl.fontBold,
    lineHeight: 20,
    letterSpacing: -0.24,
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
    
  },
  cameraWrap: {
    position: 'absolute',
    borderColor: 'transparent',
    borderWidth: 0,
    backgroundColor: 'transparent',
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
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