import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#096EC4',
  secondary: '#000000',
  gray: '#6A6A6A',
  lightGray: '#EFEFEF',
  black: '#000000',
  white: '#FFFFFF',
};

export const SIZES = {
  // global sizes
  margin: 10,
  iconSize: 24,
  radius: 5,
  padding: 15,

  // font sizes
  h1: 60,
  h2: 40,
  h3: 20,
  h4: 10,
  body1: 60,
  body2: 40,
  body3: 20,
  body4: 10,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  h1: {fontFamily: 'MarkerFelt-Regular', fontSize: SIZES.h1, lineHeight: 60},
  h2: {fontFamily: 'MarkerFelt-Regular', fontSize: SIZES.h2, lineHeight: 40},
  h3: {fontFamily: 'MarkerFelt-Regular', fontSize: SIZES.h3, lineHeight: 20},
  h4: {fontFamily: 'MarkerFelt-Regular', fontSize: SIZES.h4, lineHeight: 10},
  body1: {
    fontFamily: 'MarkerFelt-Regular',
    fontSize: SIZES.body1,
    lineHeight: 60,
  },
  body2: {
    fontFamily: 'MarkerFelt-Regular',
    fontSize: SIZES.body2,
    lineHeight: 40,
  },
  body3: {
    fontFamily: 'MarkerFelt-Regular',
    fontSize: SIZES.body3,
    lineHeight: 20,
  },
  body4: {
    fontFamily: 'MarkerFelt-Regular',
    fontSize: SIZES.body4,
    lineHeight: 10,
  },
};

const theme = {COLORS, SIZES, FONTS};

export default theme;
