import React, { useState } from "react";

//Вызовет блок, содержащий блок добавления заметок
function AddTodo({ todo, setTodo }){

    //Хук для сохранения названия заметки
    const [value, setValue] = useState('')

    //Хук для сохранения описания заметки
    const [text, setText] = useState('')
    
    function saveTodo() {
        if(todo.length<10){
            if(value !== '') {
                let newId
                //Если список пуст, то задаётся первый id
                if(todo.length===0){
                    newId = 1
                } else {
                    newId = [...todo][todo.length-1].id+1
                }
                //Добавление новой заметки
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
                    //Если в поле описания пусто
                    alert('Запишите описание в поле ввода')
                }
                //Очистка поля ввода
                setValue('')
                setText('')
            } else {
                //Если в поле задач пусто
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
            <textarea className="add-todo__textarea" placeholder="Введите описание" value={text} onChange={(e)=>setText(e.target.value)}/>
            <button className="add-todo__button" onClick={saveTodo}>
                Сохранить
            </button>
        </div>
    )
}

export default AddTodo