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
      status: false
    },
    {
      id: 2,
      title: 'задача 2',
      status: false
    },
    {
      id: 3,
      title: 'задача 3',
      status: false
    },
  ])


  return (
    <div className='App'>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo}/>
      <TodoList todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
