import {View, Text, Modal, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {COLORS, SIZES, FONTS} from '../../constants/Theme';
import TextButton from '../TextButton';

const WinnerModal = props => {
  const {winner, visible, setVisible} = props;
  return (
    <Modal transparent={true} animationType="slide" visible={visible}>
      <View style={[styles.container, {marginTop: SIZES.height / 4}]}>
        <Icon
          name="clear"
          size={28}
          style={styles.modalIcon}
          onPress={() => setVisiblesetVisible(false)}
        />
        <Image
          source={require('../../assets/Trophy.png')}
          resizeMode={'contain'}
        />
        <Text
          style={[
            styles.playerText,
            {
              color:
                winner != 'Player 1 won!' ? COLORS.secondary : COLORS.primary,
            },
          ]}>
          {winner}
        </Text>

        <TextButton
          label={'Yay!'}
          onPress={() => setVisible(false)}
          buttonContainerStyle={{
            marginTop: 40,
            backgroundColor:
              winner != 'Player 1 won!' ? COLORS.secondary : COLORS.primary,
          }}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    //height: '40%',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    justifyContent: 'space-between',
  },
  playerText: {
    marginVertical: 10,
    ...FONTS.h2,
  },
  textStyle: {
    ...FONTS.h4,
  },
});

export default WinnerModal;
