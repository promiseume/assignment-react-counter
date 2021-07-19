import React, { Component } from 'react'

export default class Clock extends Component {
    state={
        date:new Date()
    }
    componentDidMount(){
        this.timer= setInterval(this.newTime,1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    newTime = ()=>{
        this.setState({date: new Date()})
    }
    render() {
        return (
            <div>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}
