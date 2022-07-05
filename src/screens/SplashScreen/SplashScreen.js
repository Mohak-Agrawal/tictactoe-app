import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import {COLORS, FONTS, SIZES} from '../../constants/Theme';
import AppStack from '../../routes/AppStack';

const SplashScreen = () => {
  const [timeOut, setTimeOut] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTimeOut(true);
    }, 1500);
  }, []);

  return !timeOut ? (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Splash_Icon.png')}
        resizeMode="cover"
        style={{height: 300, width: 300}}
      />
      <View style={styles.col}>
        <Text style={{...FONTS.body3, color: COLORS.black}}>
          Designed & Developed by{' '}
        </Text>
        <Text style={{...FONTS.body3, color: COLORS.black}}>Mohak Agrawal</Text>
      </View>
    </View>
  ) : (
    <AppStack />
  );
};

export default SplashScreen;
