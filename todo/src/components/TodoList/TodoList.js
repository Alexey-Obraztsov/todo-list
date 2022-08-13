import React from "react";


function TodoList({todo, setTodo}){

    

    return (
        <div>
            {
                todo.map(item => (
                    <div key={item.id}>
                    <div>{item.title}</div>
                    <button onClick={() => deleteTodo(item.id)}>Удалить</button>
                    </div>
                ))
            }
        </div>
    )
}

export default TodoList