import { StyleSheet, Platform } from 'react-native';

import fonts from '../../constants/fonts';
import { colors } from '../../constants';

const styles = StyleSheet.create({
  accountCard: {
    borderRadius: Platform.OS === 'ios' ? 5 : 3,
    backgroundColor: '#fff',
    paddingBottom: 40,
    paddingHorizontal: 16,
    elevation: 3,
    shadowRadius: 6,
    shadowOpacity: 0.2,
    shadowColor: '#000',
    marginHorizontal: 16,
    marginTop: -40,
    paddingTop: 40,
  },
  iconTextField: {
    width: 20,
    height: 20,
    marginRight: 16,
    tintColor: '#949494',
  },
  buttonSubmit: {
    marginTop: -20,
    paddingHorizontal: 32,
    elevation: 4,
  },
  loginButtonDisabled: {
    backgroundColor: '#7a7a7a',
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 150,
    height: 40,
  },
  loginButton: {
    backgroundColor: colors.accentColor,
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 150,
    height: 40,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: fonts.QuicksandBold,
    textAlign: 'center',
  },
});

export default styles;
