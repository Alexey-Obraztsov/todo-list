import React, { useState } from "react";


function AddTodo({ todo,setTodo }){

    const [value, setValue] = useState('')
    const [text, setText] = useState('')
    

    function saveTodo() {
        if(todo.length<10){
            if(value !== '') {
                let newId = [...todo][todo.length-1].id+1
                if(text !== '') {
                setTodo(
                    [...todo,{
                        id: newId,
                        title: value,
                        status: true,
                        description: text
                    }]
                )
                } else {
                    alert('Запишите описание в поле ввода')
                }
                //clear the input line
                setValue('')
                setText('')
            } else {
                alert('Запишите новую задачу в поле ввода')
            }
        } else {
            alert('Слишком много задач! Выполни предыдущие, потом добавишь ещё :)')
        }
    }


    return (
        <div className="add-todo">
            <h2>Тут ты можешь добавить, отредактировать и удалить задачу</h2>
            <input className="add-todo__input" placeholder="Введите задачу" value={value} onChange={(e)=>setValue(e.target.value)}/>
            <textarea className="add-todo__input" placeholder="Введите описание" value={text} onChange={(e)=>setText(e.target.value)}/>
            <button className="add-todo__button" onClick={saveTodo}>
                Сохранить
            </button>
        </div>
    )
}

export default AddTodo