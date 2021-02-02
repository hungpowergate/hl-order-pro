import { StyleSheet, Platform, Dimensions } from 'react-native';
import { appStl, Colors } from '~/Themes';
const { width: screenWidth } = Dimensions.get('window')

export default StyleSheet.create({
  safeArea: {
    // backgroundColor: '#000'
  },
  container: {
    backgroundColor: '#E5E5E5'
  },
  headerContainer: {
    position: 'relative',
    height: 280
  },
  carouselWrap: {
    position: 'absolute',
    width: '100%',
    bottom: 35,
  },
  header: {
    height: 150,
    overflow: 'hidden',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: Colors.headerBg
  },
  avatar: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    overflow: 'hidden'
  },
  imgAvt: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  colCenter: {
    marginHorizontal: 15,
    flex: 1
  },
  hello: {
    fontFamily: appStl.fontRegular,
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)'
  },
  userName: {
    fontFamily: appStl.fontSemiBold,
    fontSize: 18,
    color: 'white'
  },
  badge: {
    minWidth: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: Colors.notiBg,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    top: 0
  },  
  notiNumber: {
    fontSize: 8,
    fontFamily: appStl.fontRegular,
    color: 'white'
  },
  wrapNotiIcon: {
    padding: 8,
    position: 'relative'
  },
  iconNoti: {
    width: 17,
    height: 22
  },

  // slide
  paginationWrap: {
    justifyContent: 'center',
    width: '100%',
    
  },
  pagination: {
    position: 'absolute',
    bottom: -10,
    width: '100%',
  
  },
  item: {
    width: screenWidth - 30,
    height: 170,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    // resizeMode: 'cover',
    resizeMode: "cover",
    justifyContent: "center"
  },

})