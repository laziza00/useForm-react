import React, { useState } from "react";
import { useForm } from "./UseForm";

const initialState = {
    name: '',
    password: ''
}

function Form(){

    const [value, inputHandler] = useForm(initialState)

    const SubmitHandler = (e) => {
        e.preventDefault();

        console.log(value);
    }

    return(
        <form onSubmit={SubmitHandler}>
            <input 
                type="text" 
                placeholder="Ism"
                onChange={inputHandler}
                defaultValue={value.name}
                name = "name"
            />
            <input 
                type="text" 
                placeholder="Password" 
                onChange={inputHandler}
                defaultValue={value.password}
                name = "password"
            />
            <button type="submit">Send</button>
        </form>
    )
}

export default Form