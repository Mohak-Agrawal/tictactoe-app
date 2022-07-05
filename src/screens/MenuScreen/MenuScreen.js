import {View, Text, BackHandler, Image, StatusBar} from 'react-native';
import React from 'react';
import styles from './Styles';
import {COLORS, FONTS, SIZES} from '../../constants/Theme';
import TextButton from '../../components/TextButton';

const MenuScreen = props => {
  const onPressExit = () => {
    BackHandler.exitApp();
  };
  return (
    <>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={styles.container}>
        <Image
          source={require('../../assets/Splash_Icon.png')}
          resizeMode="contain"
          style={{height: SIZES.width / 1.1}}
        />
        <View style={styles.card}>
          <TextButton
            label={'Start Game'}
            buttonContainerStyle={{
              marginVertical: 15,
            }}
            onPress={() => props.navigation.navigate('GameScreen')}
          />
          <TextButton label={'Exit'} onPress={onPressExit} />
        </View>
      </View>
    </>
  );
};

export default MenuScreen;
