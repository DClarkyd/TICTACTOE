import { squareTypes } from "../actions/tic-tac-toe/tic-tac-toe.actions";
import { ITicTacState } from ".";

const initialState: ITicTacState = {
  board: [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']],
  playerTurn: true,  
  winner: true,
}

export const ticTacReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case squareTypes.UPDATE_SQUARE:
      return {
        ...state,
        board: action.payload.board,
        playerTurn : action.payload.PlayerTurn
      }
  }
  return state;
}