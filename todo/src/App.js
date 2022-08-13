import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';

function App() {

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'задача 1',
      complete: 'false'
    },
    {
      id: 2,
      title: 'задача 2',
      complete: 'false'
    },
    {
      id: 3,
      title: 'задача 3',
      complete: 'false'
    },
  ])


  return (
    <div className='App'>
      <Header />
      <AddTodo />
      <TodoList todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
