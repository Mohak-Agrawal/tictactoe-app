import {StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS} from '../../constants/Theme';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    padding: 15,
    backgroundColor: COLORS.white,
  },
  card: {
    backgroundColor: COLORS.white,
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 50,
    marginTop: 50,
  },
});
