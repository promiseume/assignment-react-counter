import React, { Component } from "react";

export default class Authen extends Component {
  state = {
    isLoggedIn: true,
  };
  handleClick = () => {
    if (this.state.isLoggedIn === true) {
      this.setState({ isLoggedIn: false });
    } else {
      this.setState({ isLoggedIn: true });
    }
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        <h1> The user is {isLoggedIn ? "currently" : "not"} logged in</h1>
        <button onClick={this.handleClick}>
          {isLoggedIn ? "welcome" : "Please signup"}
        </button>
      </div>
    );
  }
}
//i am trying to create a button,that when you click on it,the text changes
//an the input on the button changes
