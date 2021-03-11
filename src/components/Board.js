import Square from "./Square";
import React from "react";

class Board extends React.Component {
  state = {
    isX: true,
    sign: "",
    move: 1,
    history: [[null, null, null, null, null, null, null, null, null]]
  };

  renderSquare = (i) => {
    let sign = this.state.history[this.state.history.length - 1][i];
    return <Square ticTacer={() => this.ticTacer(i)} sign={sign} />;
  };

  ticTacer = (i) => {
    let sign = this.state.move % 2 == 0 ? "0" : "X";
    let newMass = [...this.state.history[this.state.history.length - 1]];
    //console.log(newMass);
    if (!newMass[i]) {
      newMass[i] = sign;
      let newTurn = this.state.move + 1;
      let newHistory = [...this.state.history];
      newHistory.push(newMass);
      this.setState({ move: newTurn, history: newHistory });
      console.log(this.state.history);

      this.props.moveCounter({ move: newTurn });
    }
  };

  render() {
    const status = `Next player: ${this.state.move + (1 % 2) == 0 ? "0" : "X"}`;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
