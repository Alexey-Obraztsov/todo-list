import React, { useState } from "react";


//Вызовет блок, содержащий Todo list с возможностью редактирования
function TodoList({ todo, setTodo }) {

    //Хук для редактирования заметок
    const [edit, setEdit] = useState(null)

    //Хук для сохранения изменений
    const [value, setValue] = useState('')
    
    //Удаление заметки
    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id !== id)
        setTodo(newTodo)
    }

    //Изменение статуса заметки
    function statusTodo(id) {
        let newTodo = [...todo].filter(item => {
            if(item.id === id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }

    //Редактирование заметки
    function editTodo(id, title) {
        setEdit(id)
        setValue(title)
    }

    //Сохранение редактированной заметки
    function saveTodo(id) {
        let newTodo = [...todo].map(item =>{
            if(item.id === id) {
                item.title = value
            }
            return item
        })
        
        setTodo(newTodo)
        //Возврат в режим просмотра
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
                                    <button className="todo-list__button save" onClick={() => saveTodo(item.id)}>
                                        <img src="/images/save.png" alt="save" className="todo-list__button-image"/>
                                    </button>
                                </div> 
                            : 
                                <div className="todo-list__buttons">
                                    {
                                        item.status ? 
                                            <button className="todo-list__button unlocked" onClick={() => statusTodo(item.id)}>
                                                <img src="/images/unlocked.png" alt="unlocked" className="todo-list__button-image"/>
                                            </button>
                                            :
                                            <button className="todo-list__button lock" onClick={() => statusTodo(item.id)}>
                                                <img src="/images/lock.png" alt="lock" className="todo-list__button-image"/>
                                            </button>
                                    }
                                    <button className="todo-list__button edit" onClick={() => editTodo(item.id,item.title)}>
                                        <img src="/images/edit.png" alt="edit" className="todo-list__button-image"/>
                                    </button>
                                    <button className="todo-list__button remove" onClick={() => deleteTodo(item.id)}>
                                        <img src="/images/delete.png" alt="delete" className="todo-list__button-image"/>
                                    </button>
                                </div>
                        }         
                    </div>
                ))
            }
        </div>
    )
}

export default TodoList