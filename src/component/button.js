import React, { Component } from 'react'

export default class Button extends Component {
    state={
        count : 0
    }
    handleClick= ()=>{
        this.setState({count:this.state.count + 1})
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}
