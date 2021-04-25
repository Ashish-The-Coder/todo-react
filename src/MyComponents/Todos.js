import React from 'react'
import { TodoItem } from "./TodoItems";

export const Todos = (props) => {
    let boxStyle = {
        minHeight: "45vh"
    }
    return (
        <div className="container mb-2" style={boxStyle}>
            <h3 className="text-center">Your Current Todos</h3>
            {props.todos.length===0 ? <i>Your Todos will display here</i>:
            props.todos.map((todo)=>{
                return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /*onDone={props.onDone}*//>)
            })}
            
        </div>
    )
}
