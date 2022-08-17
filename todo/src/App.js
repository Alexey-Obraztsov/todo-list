import React, { useState } from 'react';
import './App.css';
import EditTodo from './components/EditTodo/EditTodo';
import FindTodo from './components/FindTodo/FindTodo';
import TodoTask from './components/TodoTask/TodoTask';
import AboutTodo from './components/AboutTodo/AboutTodo';


function App() {

  const [logo, setLogo] = useState()

  const [button, setButton] = useState()

  const [link, setLink] = useState()

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'задача 1',
      status: true,
      description: 'Покосить траву'
    },
    {
      id: 2,
      title: 'задача 2',
      status: true,
      description: 'Купить молоко'
    },
    {
      id: 3,
      title: 'задача 3',
      status: true,
      description: 'Учить прогу'
    },
  ])

  console.log(link)
  return (
    <div className='container'>
      <div className='container__search'>
        <FindTodo todo={todo} setLink={setLink} setButton={setButton} setLogo={setLogo}/>
              
      </div>
      <div className='container__blocks'>
        {
          (link === undefined && button && logo) ?
          <AboutTodo />
          :
          (link !== undefined && !button && logo) ?
          <AboutTodo />
          :
          (link !== undefined && button && !logo) ?
          <EditTodo todo={todo} setTodo={setTodo} />
          :
          (link !== undefined && !button && !logo) ?
          <TodoTask link={link} todo={todo}/>
          :
          (link === undefined && button && !logo) ?
          <EditTodo todo={todo} setTodo={setTodo} />
          :
          <AboutTodo />
        }        
      </div>
    </div>
  );
}

export default App

