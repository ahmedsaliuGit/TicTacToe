import React from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';

const Square = (props) => {
  const pressHandler = () => {
    console.log('Pressed!');
  };

  return (
    <Pressable style={styles.square} onPress={() => props.handlePress()}>
      <View>
        <Text>{props.value}</Text>
      </View>
    </Pressable>
  );
};

const Board = (props) => {
  const {squares, onPress} = props;
  const renderSquare = (pos) => {
    return <Square value={squares[pos]} handlePress={() => onPress(pos)} />;
  };

  return (
    <>
      <View style={styles.boardRow}>
        {renderSquare(squares[0])}
        {renderSquare(squares[1])}
        {renderSquare(squares[2])}
      </View>
      <View style={styles.boardRow}>
        {renderSquare(squares[3])}
        {renderSquare(squares[4])}
        {renderSquare(squares[5])}
      </View>
      <View style={styles.boardRow}>
        {renderSquare(squares[6])}
        {renderSquare(squares[7])}
        {renderSquare(squares[8])}
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
});

export default Board;
