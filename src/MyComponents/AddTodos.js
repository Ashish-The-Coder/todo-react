import React, {useState} from 'react'
import { ListTask } from 'react-bootstrap-icons'

export const AddTodos = (props) => {
    const [title, setTitle] = useState("")
    const [des, setDes] = useState("")

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !des){
            alert("Title or Description cannot be blank")
        }else{
            props.addTodo(title, des)
            setTitle("")
            setDes("")
        }
    }
    return (
        <div className="container my-3 mb-5">
            <h3 className="text-center">Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="todo-title" className="form-label">Todo title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="todo-title" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="todo-des" className="form-label">Description of your Todo</label>
                    <input type="text" value={des} onChange={(e)=>{setDes(e.target.value)}} className="form-control" id="todo-des"/>
                </div>
                <button type="submit" className="btn btn-info">Add Todo <ListTask/></button>
            </form>
        </div>
    )
}
