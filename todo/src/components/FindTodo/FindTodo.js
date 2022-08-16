import React, { useState } from "react";


function FindTodo({ todo, setTodo }){

    const [value, setValue] = useState('')

    const filteredValue = todo.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))

    return (
        <div className="todo-search">
            <div className="logo">
                <img src="/images/logo.png" alt="logo" className="logo__image"/>
            </div>
            <div className="todo-search__input-area">
                <input className="todo-search__input" placeholder="Искать" value={value} onChange={(e) => setValue(e.target.value)}/>
            </div>
            {
                filteredValue.map(item => (
                    <div className="todo-search__container" key={item.title}>                          
                            {
                                item.status ?
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
                            }
                    </div>
                ))
            }
            <changeMain />
        </div>
    )
}

export default FindTodo
