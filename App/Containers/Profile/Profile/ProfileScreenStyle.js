import { StyleSheet } from 'react-native';

import { appStl, Colors } from '~/Themes';

export default StyleSheet.create({
  input: {
    // marginBottom: 0,
    // marginTop: 20
  },
  avatarWrap: {
    position: 'relative',
    justifyContent: "center",
    alignItems: 'center'
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden'
  },
  avatarImg: {
    resizeMode: 'cover',
    flex: 1,
    justifyContent: "center"
  },
  cameraWrap: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#EBE7E7',
    justifyContent: "center",
    alignItems: 'center',
    position: 'relative',
    right: -35,
    top: -30

  },
  camera: {
    width: 15,
    height: 12
  },
  userName: {
    fontFamily: appStl.fontSemiBold,
    textAlign: 'center',
    fontSize: 14,
    color: '#000'
  },
  formLabel: {
    fontFamily: appStl.fontSemiBold,
    fontSize: 14,
    color: '#000',
    marginBottom: 25
  }
})