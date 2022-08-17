import React, { useState } from "react";

//Вызовет блок, содержащий логотип, поле для поиска по названию, списка задач
// и кнопки для перехода на страницу редактирования
function FindTodo({ todo, setLink, setButton, setLogo }){

    //Хук для поиска по названию
    const [value, setValue] = useState('')

    //Поиск по названию заметки 
    const filteredValue = todo.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))

    function turnTaskPage(id) {
        setLink(id)
        setLogo(false)
        setButton(false)
    }

    function turnAboutPage() {
        setLink('')
        setLogo(true)
        setButton(false)
    }

    function turnEditPage() {
        setLink('')
        setLogo(false)
        setButton(true)
    }

    return (
        <div className="todo-search">
            <div className="logo">
                <button className="logo__button" onClick={() => turnAboutPage()}><img src="/images/logo.png" alt="logo" className="logo__image"/></button>
            </div>
            <div className="todo-search__input-area">
                <input className="todo-search__input" placeholder="Искать" value={value} onChange={(e) => setValue(e.target.value)}/>
            </div>
            <div className="todo-search__container">
            {
                filteredValue.map(item => (
                    <div className="todo-search__blocks" key={item.title}>                          
                            {
                                item.status ?
                                <div className="todo-search__title">
                                    <div className="todo-search__title">
                                        <button className="todo-search__button_active" onClick={() => turnTaskPage(item.id)}>{item.title}</button>
                                    </div>
                                </div>
                                :
                                <div className="todo-search__title">
                                    <div className="todo-search__title">
                                        <button className="todo-search__button_closed" onClick={() => turnTaskPage(item.id)}>{item.title}</button>
                                    </div>
                                </div>                           
                            }
                    </div>
                ))
            }
            </div>
            <button className="edit-button" onClick={() => turnEditPage()}>Редактировать</button>  
        </div>
    )
}

export default FindTodo
