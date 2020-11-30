import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GameStatus = (props) => {
  const {winner, xIsNext} = props;
  return (
    <>
      <View style={styles.statusBar}>
        <Text style={styles.title}>TicTacToe</Text>
        <Text style={winner ? styles.winner : styles.playing}>{xIsNext}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffccc',
  },
  title: {
    fontSize: 36,
    alignSelf: 'center',
  },
  playing: {
    color: 'black',
    padding: 10,
  },
  winner: {
    padding: 10,
    backgroundColor: 'green',
    color: 'white',
  },
});

export default GameStatus;
