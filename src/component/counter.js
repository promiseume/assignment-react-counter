import React, { Component } from 'react'

export default class Counter extends Component {
    state={
        count: 0
    }
    componentDidMount(){
        this.myTimer= setInterval(this.add,1000);
    }
    componentWillUnmount(){
        clearInterval(this.myTimer);
    }
    add = ()=>{
        this.setState({count : this.state.count+1})
    }
    render() {
        return (
            <div>
              <h1>{this.state.count}</h1>  
            </div>
        )
    }
}



