import {StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS} from '../../constants/Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 80,
  },
  col: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
