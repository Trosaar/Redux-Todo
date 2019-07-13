import React from 'react';
import './App.css';

import TodoList from './components/TodoList.js';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;
