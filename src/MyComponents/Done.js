import React from 'react'
import { DoneTodoItem } from "./DoneTodoItem";

export const Done = (props) => {
    return (
        <div className="container">
            <h3 className="text-center">Done Todos</h3>
            {props.doneTodos.map((doneTodo)=>{
                return <DoneTodoItem todo={doneTodo} key={doneTodo.sno} onDoneDelete={props.onDoneDelete}/>
            })}
        </div>
    )
}
