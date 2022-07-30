import {StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS} from '../../constants/Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  col: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
