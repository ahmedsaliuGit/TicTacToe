import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Pressable,
  FlatList,
} from 'react-native';
import Board from './components/Board';

import GameStatus from './components/GameStatus';

const Game = () => {
  const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  let status;

  const handlePress = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? 'X' : 'O';
    // console.log(squares[i], newHistory);
    setHistory(newHistory.concat([{squares: squares}]));
    // console.log('AFTERSETSTATE::', newHistory, squares);
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const moves = history.map((step, move) => ({key: move}));

  if (winner) {
    status = `The winner is ${winner}`;
  } else {
    status = `Next Player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <View style={styles.game}>
        <View style={styles.gameStatus}>
          <GameStatus xIsNext={status} winner={winner} />
        </View>
        <View style={styles.gameBody}>
          <Board
            squares={current.squares}
            handlePress={(i) => handlePress(i)}
          />
        </View>
        <View style={styles.gameHistory}>
          <FlatList
            data={moves}
            renderItem={({item}) => (
              <Pressable onPress={() => jumpTo(item.key)} style={styles.move}>
                <Text>
                  {item.key ? `Go to move #${item.key}` : 'Go to game start'}
                </Text>
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  game: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 5,
  },
  gameStatus: {
    flex: 1,
    flexDirection: 'column',
  },
  gameBody: {
    flex: 3,
    flexDirection: 'column',
  },
  gameHistory: {
    flex: 2,
    flexDirection: 'column',
  },
  move: {
    marginHorizontal: 3,
    flex: 1,
    fontSize: 12,
    lineHeight: 12,
    padding: 6,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 2,
    backgroundColor: '#ccc',
  },
});

export default Game;

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
