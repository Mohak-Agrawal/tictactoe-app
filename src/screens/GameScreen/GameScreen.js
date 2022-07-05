import {
  View,
  Text,
  ScrollView,
  Modal,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, {useEffect, useState} from 'react';
import {COLORS, SIZES} from '../../constants/Theme';
import TextButton from '../../components/TextButton';
import styles from './Styles';
import WinnerModal from '../../components/WinnerModal';
import Header from '../../components/Header';

const GameScreen = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [gameState, setGameState] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [winner, setWinner] = useState('');
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const renderSign = (row, column) => {
    let value = gameState[row][column];

    switch (value) {
      case 1:
        return <Text style={styles.zeroSymbol}>O</Text>;
      case -1:
        return <Text style={styles.xSymbol}>X</Text>;
      default:
        return <View />;
    }
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    setGameState([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
    setCurrentPlayer(1);
  };

  const onTilePress = (row, column) => {
    let value = gameState[row][column];
    console.log({value});
    if (value !== 0) {
      return;
    }

    console.log({currentPlayer});
    let arr = gameState.slice();
    arr[row][column] = currentPlayer;
    console.log({arr});
    setGameState(arr);

    let nextPlayer = currentPlayer === 1 ? -1 : 1;
    setCurrentPlayer(nextPlayer);

    let winner = getWinner();
    if (winner == 1) {
      setWinner('Player 1 won!');
      setModalVisible(true);
      initializeGame();
    } else if (winner == -1) {
      setWinner('Player 2 won!');
      setModalVisible(true);
      initializeGame();
    }
  };

  const getWinner = () => {
    const NUM_TILES = 3;
    let arr = gameState;
    let sum;

    for (let i = 0; i < NUM_TILES; i++) {
      sum = arr[i][0] + arr[i][1] + arr[i][2];
      if (sum == 3) {
        return 1;
      } else if (sum == -3) {
        return -1;
      }
    }

    for (let i = 0; i < NUM_TILES; i++) {
      sum = arr[0][i] + arr[1][i] + arr[2][i];
      if (sum == 3) {
        return 1;
      } else if (sum == -3) {
        return -1;
      }
    }

    sum = arr[0][0] + arr[1][1] + arr[2][2];
    if (sum == 3) {
      return 1;
    } else if (sum == -3) {
      return -1;
    }

    sum = arr[2][0] + arr[1][1] + arr[0][2];
    if (sum == 3) {
      return 1;
    } else if (sum == -3) {
      return -1;
    }

    return 0;
  };

  const onResetGame = () => {
    initializeGame();
  };

  return (
    <>
      <Header {...props} />
      <View style={styles.container}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={[
              styles.playerText,
              {
                color: currentPlayer != 1 ? COLORS.secondary : COLORS.primary,
              },
            ]}>
            {currentPlayer != 1 ? 'Player 2 turn' : 'Player 1 turn'}
          </Text>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={[styles.tile, {borderLeftWidth: 0, borderTopWidth: 0}]}
              onPress={() => onTilePress(0, 0)}>
              {renderSign(0, 0)}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tile, {borderTopWidth: 0}]}
              onPress={() => onTilePress(0, 1)}>
              {renderSign(0, 1)}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tile, {borderRightWidth: 0, borderTopWidth: 0}]}
              onPress={() => onTilePress(0, 2)}>
              {renderSign(0, 2)}
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={[styles.tile, {borderLeftWidth: 0}]}
              onPress={() => onTilePress(1, 0)}>
              {renderSign(1, 0)}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tile}
              onPress={() => onTilePress(1, 1)}>
              {renderSign(1, 1)}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tile, {borderRightWidth: 0}]}
              onPress={() => onTilePress(1, 2)}>
              {renderSign(1, 2)}
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={[styles.tile, {borderLeftWidth: 0, borderBottomWidth: 0}]}
              onPress={() => onTilePress(2, 0)}>
              {renderSign(2, 0)}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tile, {borderBottomWidth: 0}]}
              onPress={() => onTilePress(2, 1)}>
              {renderSign(2, 1)}
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tile,
                {borderRightWidth: 0, borderBottomWidth: 0, marginBottom: 30},
              ]}
              onPress={() => onTilePress(2, 2)}>
              {renderSign(2, 2)}
            </TouchableOpacity>
          </View>
        </View>

        <WinnerModal
          visible={modalVisible}
          setVisible={setModalVisible}
          winner={winner}
        />

        <TextButton label={'Reset'} onPress={onResetGame} />
      </View>
    </>
  );
};

export default GameScreen;
