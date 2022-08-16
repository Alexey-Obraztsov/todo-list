import React, {useState} from "react";

function changeMain(){

    const [value, setValue] = useState('')

    return (
        <button className="edit-button" onClick={changeMain}>Редактировать</button>
    )
}