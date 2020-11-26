import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GameStatus = (props) => {
  return (
    <>
      <View style={styles.statusBar}>
        <Text style={styles.title}>TicTacToe</Text>
        <Text>{props.xIsNext}</Text>
        <Text>Count: {props.count}</Text>
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
});

export default GameStatus;
