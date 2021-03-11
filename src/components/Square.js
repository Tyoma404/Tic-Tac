import React from "react";

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={this.props.ticTacer}>
        {this.props.sign}
      </button>
    );
  }
}
export default Square;
