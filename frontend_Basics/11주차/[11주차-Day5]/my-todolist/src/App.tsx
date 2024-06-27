import React from 'react';
import './App.css';
import TodoList from './components/todolist/TodoList'
import Timer from './components/time/Timer'
import Clock from './components/time/Clock'

import MyWeather from './components/MyWeather';

const App = () => {
  return (
    <div className="container">
      <TodoList />  
      <Clock />
      {/* 태그 안에 작성하면 해당 component의 children */}
      <MyWeather weather="흐림">일기예보</MyWeather>
    </div>
  );
}

export default App;
