import {StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS} from '../../constants/Theme';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 15,
  },
  toolbar: {
    width: '100%',
    alignItems: 'flex-start',
    padding: 20,
  },
  tile: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  zeroSymbol: {
    ...FONTS.h1,
    color: COLORS.primary,
  },
  xSymbol: {
    ...FONTS.h1,
    color: COLORS.secondary,
  },
  playerText: {
    marginTop: 20,
    marginBottom: 50,
    ...FONTS.body2,
    color: COLORS.black,
  },
});
