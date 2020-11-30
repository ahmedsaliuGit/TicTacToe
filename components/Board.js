import React, {useState} from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';

const Square = (props) => {
  const {value, handlePress} = props;

  return (
    <Pressable style={styles.square} onPress={handlePress}>
      <View>
        <Text style={styles.squareText}>{value}</Text>
      </View>
    </Pressable>
  );
};

const Board = (props) => {
  const {squares, handlePress} = props;
  const renderSquare = (pos) => {
    return <Square value={squares[pos]} handlePress={() => handlePress(pos)} />;
  };

  return (
    <>
      <View style={styles.boardRow}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </View>
      <View style={styles.boardRow}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </View>
      <View style={styles.boardRow}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  boardRow: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 3,
  },
  square: {
    width: 132,
    backgroundColor: 'lightblue',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
  },
  squareText: {
    fontSize: 44,
    fontWeight: 'bold',
    lineHeight: 54,
  },
});

export default Board;
