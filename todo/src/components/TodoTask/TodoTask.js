import React from "react";


//Вызовет блок, содержащий задания с описанием
function TodoTask({ todo, link }) {

    //Переход на страницу с описанием, при нажатии на заметку
    let newArr = [...todo].filter(item => item.id === link)
    
    return (
        <div className='wrapper-description'>
            {
                <h1 className='wrapper-description__title'>{newArr[0].title}</h1>
            }
            {
                <h3 className="wrapper-description__description">{newArr[0].description}</h3>
            }
        </div>
        )
}

export default TodoTask