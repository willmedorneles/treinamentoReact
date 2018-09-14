import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo';
const connectFn = connect(store => ({
  TodoList: store.todoList.todos
}))


class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      TodoList,
      tempName: ''
    }
  }
  markTodoAsDone(id){
    const todoList = this.props.TodoList.map((todo) => {
      if(todo.id !== id){
        return todo
      }else{
        return {...todo, done:true}
      }
    })

    this.props.dispatch({ type: 'REMOVE_TODO', payload: todoList})
  }

  inputHandler(e){
    const newState = this.state
    newState.tempName = e.target.value
    this.setState(newState)
  }
  createNewTodo(){
    console.log(this.props.TodoList[this.props.TodoList.length-1])
    let newState =
      {
        id: this.props.TodoList[this.props.TodoList.length-1].id +1,
        title: this.state.tempName,
        createdAt: new Date(),
        done: false
      }
    console.log(newState)
    this.props.dispatch({type:'ADD_TODO', payload: newState})
    
  }

  render() {
    const style = {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      flexDirection: 'column',
    }

    return (
      <div style={style}>
        <h1>Todo List</h1>
        <TodoList 
          removeTodo = {this.markTodoAsDone.bind(this)}
          todos={this.props.TodoList} 
        />
        <NewTodo
          newTodo = {this.createNewTodo.bind(this)}
          inputChange = {this.inputHandler.bind(this)}
          inputVal = {this.state.tempName}
        />
      </div>
    );
  }
}

export default connectFn(App);
