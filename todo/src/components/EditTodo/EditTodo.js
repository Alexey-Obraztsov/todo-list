import React from "react";
import AddTodo from "../AddTodo/AddTodo"
import TodoList from "../TodoList/TodoList"

//Вызовет блок, содержащий блоки добавления и редактирования
function EditTodo({ todo, setTodo }) {
    return (
        <div className='wrapper-edit'>
          <AddTodo todo={todo} setTodo={setTodo} />
          <TodoList todo={todo} setTodo={setTodo}/>
        </div>
    )
}

export default EditTodo