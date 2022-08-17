import React from "react";

function AboutTodo() {
    return (
        <div className='wrapper-about'>
            <h3 className='wrapper-about__title'>Привет!</h3>
            <p>Список TO DO — это простой список дел или список задач. 
            Запиши в него все свои важные дела, чтобы не забыть.</p>
            <img className='wrapper-about__image' src='/images/savetime.png' alt="savetime"/>
        </div>
        )
}

export default AboutTodo