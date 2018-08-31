
export const squareTypes = {
  UPDATE_SQUARE: 'UPDATE_SQUARE',
}

export const isXNext = (board: string[][], index1: number, index2: number, playerTurn: boolean) => {
  const brd = board;

  if (board[index1][index2] !== ' ') {
    return{
      payload: {
        PlayerTurn: playerTurn,
        board: brd
      },
      type: squareTypes.UPDATE_SQUARE
    }
  }
  else if (playerTurn) {
    brd[index1][index2] = 'X'
  }
  else {
    brd[index1][index2] = 'O'
  }
return {
  payload: {
    PlayerTurn: !playerTurn,
    board: brd
  },
  type: squareTypes.UPDATE_SQUARE
}
}
