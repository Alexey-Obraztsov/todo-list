import React from "react";
import AddTodo from "../AddTodo/AddTodo"
import TodoList from "../TodoList/TodoList"

function EditTodo({ todo, setTodo }) {
    return (
        <div className='wrapper-edit'>
          <AddTodo todo={todo} setTodo={setTodo}/>
          <TodoList todo={todo} setTodo={setTodo}/>
        </div>
    )
}

export default EditTodo