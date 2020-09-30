import { StyleSheet } from 'react-native'
import Colors from './Colors';

export default StyleSheet.create({  
  safeArea: {
    flex: 1, 
  },
  flex_1: {
    flex: 1, 
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: 'white'
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  pr20: {
    paddingRight: 20
  },
  px15: {
    paddingHorizontal: 15
  },
  mx15: {
    marginHorizontal: 15
  },
  mt20: {
    marginTop: 20
  },
  mt35: {
    marginTop: 35
  },
  mb10: {
    marginBottom: 10
  },
  pt35: {
    paddingTop: 35
  },
  p0: {
    padding: 0,
    paddingVertical: 0,
    paddingHorizontal: 0
  },

  green: {
    color: Colors.green
  },
  blue: {
    color: Colors.blue
  }
})