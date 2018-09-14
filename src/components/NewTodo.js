import React, { Component } from 'react'

export default class NewTodo extends Component {
    render(){
        return(
            <div>
                <p>Title</p>
                <input value={this.props.inputVal} onChange={this.props.inputChange} type='text'></input>
                <button onClick={this.props.newTodo}>send</button>
            </div>
        )
    }
}