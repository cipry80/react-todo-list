import React, { Component } from 'react';
//import TextInput from './TextInput';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default class App extends Component {
  render() {
    return <div>
              <h1>Todo List</h1>
              <TodoInput />
              <TodoList />
          </div>
  }
}
