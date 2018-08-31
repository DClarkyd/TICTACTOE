import * as React from 'react';
import { IState } from '../../../reducers';
import { connect } from 'react-redux';
import { isXNext } from '../../../actions/tic-tac-toe/tic-tac-toe.actions';


interface IProps {
  board: string[][],
  playerTurn: boolean,
  winner: boolean,
  isXNext: any
}

export class TicTacComponent extends React.Component<IProps, any> {

  public handleClick = (index1: number, index2: number, e: any) => {
    this.props.isXNext(this.props.board, index1, index2, this.props.playerTurn)
  }

  public render() {
    return (
      [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']].map((row, index) => (
        <div key={index} className="row">
          {row.map((col, index2) => (
            <div key={"" + index + "," + col} onClick={() => {
              this.handleClick(index, index2, event)
            }} className="col-4 wordSquare">{this.props.board[index][index2]}</div>
          )
          )
          }
        </div>
      )
      )
    )
  }
}

const mapStateToProps = (state: IState) => state.ticTac;
const mapDispatchToProps = {
  isXNext
}

export default connect(mapStateToProps, mapDispatchToProps)
  (TicTacComponent);


