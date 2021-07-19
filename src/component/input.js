import React, { Component } from "react";

export default class Input extends Component {
  state = {
    color: "blue",
  };
  handleChange=(e)=>{
      this.setState({color:e.target.value})
  }


  render() {
    return (
      <div>
        <h1 style={{ backgroundColor: this.state.color }}>hi</h1>
        <input onChange={this.handleChange}></input>
      </div>
    );
  }
}
