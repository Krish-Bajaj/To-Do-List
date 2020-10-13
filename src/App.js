import React, { Component } from 'react';
import Todo from './Todo'               // Class Names have to be in capital else it won't recognize ==> "T"odo
import AddTodo from './AddTodo'

class App extends Component{
  state = {
    todoList:[
      // {id:1, content:"Do your Homework"},
      // {id:2, content:"Complete the To-Do app"}
    ]
  };
  deleteTodo = (id) => {
    const todoList = this.state.todoList.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todoList: todoList
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random()
    let todoList = [...this.state.todoList, todo]
    this.setState({
      todoList: todoList
    })
  }
  render(){
    return (
      <div className="App container">
        <h1 className="center red-text">Todo's</h1>
        <Todo todos={this.state.todoList} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;