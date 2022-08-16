import React, { useState } from "react";

function TodoList({ todo, setTodo }) {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')
    

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id !== id)
        //setTodo from useState hook in App.js
        setTodo(newTodo)
    }

    function statusTodo(id) {
        let newTodo = [...todo].filter(item => {
            if(item.id === id) {
                item.status = !item.status
            }
            return item
        })
        //setTodo from useState hook in App.js
        setTodo(newTodo)
    }

    function editTodo(id, title) {
        setEdit(id)
        setValue(title)
    }

    function saveTodo(id) {
        let newTodo = [...todo].map(item =>{
            if(item.id === id) {
                item.title = value
            }
            return item
        })
        
        setTodo(newTodo)
        //return to viewing mode
        setEdit(null)
    }

    return (
        <div className="todo-list">
            {
                todo.map(item => (
                    <div className="todo-list__container" key={item.id}>
                        {
                            edit === item.id ?
                                <div className="todo-list__title">
                                    <input className="todo-list__input" value={value} onChange={(e) => setValue(e.target.value)}/>                            
                                </div>
                            :
                                (item.status ?
                                <div className="todo-list__title">
                                    <div className="todo-list__title_active">
                                        {item.title}
                                    </div>
                                </div>
                                :
                                <div className="todo-list__title">
                                    <div className="todo-list__title_closed">
                                        {item.title}
                                    </div>
                                </div>
                                )               
                        }
                        {
                            edit === item.id ?
                                <div className="todo-list__button">
                                    <button className="todo-list__button_save" onClick={() => saveTodo(item.id)}></button>
                                </div> 
                            : 
                                <div className="todo-list__button">
                                    {
                                        item.status ? 
                                            <button className="todo-list__button_unlocked" onClick={() => statusTodo(item.id)}></button>
                                            :
                                            <button className="todo-list__button_lock" onClick={() => statusTodo(item.id)}></button>
                                    }
                                    <button className="todo-list__button_edit" onClick={() => editTodo(item.id,item.title)}></button>
                                    <button className="todo-list__button_delete" onClick={() => deleteTodo(item.id)}></button>
                                </div>
                        }         
                    </div>
                ))
            }
        </div>
    )
}

export default TodoList