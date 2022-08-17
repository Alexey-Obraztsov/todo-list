import React from "react";

function TodoTask({ todo, link }) {

    let x = [...todo].filter(item => item.id === link)
    
    return (
        <div className='wrapper-description'>
            {
                <h1 className='wrapper-description__title'>{x[0].title}</h1>
            }
            {
                <h3 className="wrapper-description__description">{x[0].description}</h3>
            }
        </div>
        )
}

export default TodoTask