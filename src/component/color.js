import React, { Component } from "react";

export default class Color extends Component {
  state = {
    color: "blue",
  };

  onclick = () => {
    if (this.state.color === "blue") {
      this.setState({ color: "yellow" });
    } else {
      this.setState({ color: "blue" });
    }
  };

  render() {
    return (
      <div>
        <h1 style={{ backgroundColor: this.state.color }}>hi</h1>
        <button onClick={this.onclick}></button>
      </div>
    );
  }
}
