import React from 'react'
import {Check2Circle} from 'react-bootstrap-icons'

export const TodoItem = ({todo, /*onDone,*/ onDelete}) => {
    return (
        <div className="container mb-4">
            <h5>{todo.title}</h5>
            <p>{todo.des}</p>
            {/* {<button className="btn-sm btn btn-outline-primary" onClick={ ()=> {onDone(todo)}}>Done</button>} */}
            <button className="btn btn-sm btn-outline-primary" onClick={ ()=> {onDelete(todo)}}>Done <Check2Circle/></button>
            <hr/>
        </div>
    )
}
