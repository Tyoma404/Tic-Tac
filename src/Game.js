import "./styles.css";
import Board from "./components/Board";
import React from "react";

class Game extends React.Component {
  state = {
    move: 1
  };

  handler = (newState) => this.setState(newState);

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board moveCounter={this.handler} />
        </div>
        <div className="game-info">
          <div>{"Ход " + this.state.move}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
export default Game;
