import React from 'react'

export const DoneTodoItem = ({todo, onDoneDelete}) => {
    return (
        <div className="container mb-4">
            <h5>{todo.title}</h5>
            <p>{todo.des}</p>
            <button className="btn btn-sm btn-outline-danger" onClick={ ()=> {onDoneDelete(todo)}}>Delete</button>
            <hr/>
        </div>
    )
}
