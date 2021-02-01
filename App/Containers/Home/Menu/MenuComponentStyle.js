import { StyleSheet } from 'react-native';
import { Colors } from '~/Themes';

export default StyleSheet.create({
  listMenu: {
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuContainer: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.16,
    elevation: 11,
    shadowOffset: {
      width: 2,
      height: 5,
    },
  },
  rowBalance: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'rgba(130, 130, 130, 0.5)',
    borderBottomWidth: 1,
    paddingBottom: 10
  },
  numberBalance: {
    fontSize: 16,
    color: Colors.blue,
    fontFamily: 'Muli-Regular',
  },
  menuItem: {
    flex: 1
  }
})