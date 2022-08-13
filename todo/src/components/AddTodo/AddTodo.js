import React, { useState } from "react";
import TodoList from "../TodoList/TodoList";


function AddTodo({ todo,setTodo }){

    const [value, setValue] = useState('')


    function saveTodo() {

        let newId = [...todo][todo.length-1].id+1

        setTodo(
            [...todo,{
                id: newId,
                title: value,
                status: true
            }]
        )
        
        //clear the input line
        setValue('')
    }


    return (
        <div>
            <input placeholder="Введите задачу" value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={saveTodo}>Сохранить</button>
        </div>
    )
}

export default AddTodo