import React from 'react'
import {Check2Circle, ListTask} from 'react-bootstrap-icons'

export const About = () => {
    let cursorStyle={
        cursor: "default"
    }
    let heightStyle={
        minHeight: "82.8vh"
    }
    return (
        <div style={heightStyle} className="container">
            <h3 className="text-center my-4">About</h3>
            <p className="mb-4"><span className="fw-bold">"Todos List"</span> is a free and open-source Todo List Web-App, build using <a href="http://reactjs.org" target="_blank" rel="noopener noreferrer" className="text-decoration-none">React JS</a>. You can view the source code, add a issue, or contribute in <a href="http://github.com/Ashish-The-Coder/todo-react" target="_blank" rel="noopener noreferrer" className="text-decoration-none">this Github Repositry</a>.</p>

            <h5>What are its feature?</h5>
            <p className="mb-4">In this Todo List website you can add your own todos, if you have completed the task simmply click on <span style={cursorStyle} className="bg-outline-primary p-1 border border-primary rounded text-primary">Done <Check2Circle/></span> button. One important feature is that whenever<br/>you open the site from same browser your todos will be saved, unless and untill you clear browser data.<br/>To add a new todo add title and description of the todo and then just tap on <span style={cursorStyle} className="bg-info rounded p-1">Add Todo <ListTask/></span> button</p>

            <h5>How this Website is made?</h5>
            <p className="mb-4">This website is made using <a href="http://reactjs.org" target="_blank" rel="noopener noreferrer" className="text-decoration-none">ReactJs</a> (a JavaScript library), <a href="http://getbootstrap.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">Bootstrap</a> for styling and <a href="http://icons.bootstrap.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">Bootstrap Icons</a> for the icons like "<Check2Circle/> and <ListTask/>"</p>

            <h5>Who made this?</h5>
            <p className="mb-4">This Web-App is made by <a href="http://github.com/Ashish-The-Coder" target="_blank" rel="noopener noreferrer" className="text-decoration-none">Ashish</a>, a 14 years old coder from India.</p>

            <h5>For what I can contribute?</h5>
            <p className="mb-4">You can contribute for any new design, function like done todos will be shown in another section with time, update the MD file etc. To contribute click <a href="http://github.com/Ashish-The-Coder/todo-react" target="_blank" rel="noopener noreferrer" className="text-decoration-none">here</a></p>

            <h5>What if I want to tell an issue?</h5>
            <p>If you got any problem or want someone to change anything you can tell the issue to me via <a href="mailto:adi24ashish@gmail.com" target="_blank" rel="noopener noreferrer">mail</a>, or add the issue in the <a href="https://github.com/Ashish-The-Coder/Portfolio/issues/new" target="_blank" rel="noopener noreferrer">github repository</a>.</p>
        </div>
    )
}
