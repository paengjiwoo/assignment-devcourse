import React from 'react';
import './App.css';
import TodoList from './components/todolist/TodoList'
import Timer from './components/time/Timer'
import Clock from './components/time/Clock'

const App = () => {
  return (
    <div className="container">
      <TodoList />  
      <Clock />
    </div>
  );
}

export default App;
