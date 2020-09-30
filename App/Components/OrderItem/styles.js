import { StyleSheet } from 'react-native';
import { Colors } from '~/Themes';

export default StyleSheet.create({
  container: {
    borderBottomColor: 'rgba(130, 130, 130, 0.5)',
    borderBottomWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 15
  },
  boxDetails: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50
  },
  colCenter: {
    flex: 1,
    marginHorizontal: 15
  },
  colRight: {
    width: 80,
    alignItems: 'flex-end'
  },
  idOrder: {
    fontFamily: 'Muli-Regular',
    fontSize: 12,
    lineHeight: 20,
    letterSpacing: -0.24,
    color: Colors.gray
  },
  name: {
    fontFamily: 'Muli-Semibold',
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: -0.24,
    color: Colors.black
  },
  status: {
    width: 60,
    height: 16,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  statusText: {
    fontFamily: 'Muli-Regular',
    fontSize: 10,
    letterSpacing: -0.24,
    color: 'white',
  },
  createAt: {
    fontSize: 10,
    fontFamily: 'Muli-Regular',
    color: 'rgba(130, 130, 130, 0.5)',
    lineHeight: 20,
    letterSpacing: -0.24,
  },

  boxScan: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  colScanCenter: {
    flex: 1,
    marginHorizontal: 8
  },
  wrapCamera: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: Colors.gray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginVertical: 4

  },
  iconCamera: {
    width: 37,
    height: 30,
    marginLeft: 20
  },
  btnScan: {
    width: 75,
    height: 25,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: Colors.gray,
    paddingVertical: 5,
    alignItems: 'center',
    marginVertical: 4
  },
  textScan: {
    fontSize: 10,
    fontFamily: 'Muli-Regular',
    color: '#000000',
    letterSpacing: -0.24,

  }
})