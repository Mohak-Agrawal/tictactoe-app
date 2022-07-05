import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/Theme';

const TextButton = ({
  buttonContainerStyle,
  disabled,
  label,
  labelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.btnContainer,
        {
          backgroundColor: disabled ? COLORS.gray : COLORS.primary,
          ...buttonContainerStyle,
        },
      ]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}>
      <Text style={[styles.btnText, {...labelStyle}]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    padding: 15,
    width: '100%',
    borderRadius: 30,
    elevation: 5,
  },
  btnText: {
    color: COLORS.white,
    ...FONTS.h3,
    textTransform: 'uppercase',
  },
});

export default TextButton;
