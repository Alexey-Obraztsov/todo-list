import React, { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import FindTodo from './components/FindTodo/FindTodo';

function App() {

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'задача 1',
      status: true
    },
    {
      id: 2,
      title: 'задача 2',
      status: true
    },
    {
      id: 3,
      title: 'задача 3',
      status: true
    },
  ])

  return (
    <div className='container'>
      <div className='container__search'>
        <FindTodo todo={todo} setTodo={setTodo}/>
      </div>
      <div className='container__blocks'>
        <div className='wrapper-about'>
          <h3>Привет!</h3>
          <p>Список TO DO — это простой список дел или список задач. 
            Запиши в него все свои важные дела, чтобы не забыть.</p>
            <img className='wrapper-about__image' src='/images/savetime.png' alt="savetime"/>
        </div>
        <div className='wrapper-task'></div>
        <div className='wrapper-edit'>
          <AddTodo todo={todo} setTodo={setTodo}/>
          <TodoList todo={todo} setTodo={setTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
