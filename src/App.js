import './App.css';
import {Header} from "./MyComponents/Header";
import { AddTodos } from "./MyComponents/AddTodos";
import {Todos} from "./MyComponents/Todos";
// import {Done} from "./MyComponents/Done";
import {Footer} from "./MyComponents/Footer";
import {About} from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  
  // // // // If want to use Done Block 
  // // const onDone = (todo)=>{
  // //   console.log("onDone Fired for", todo)
  // //   setDoneTodos(doneTodos.filter((e)=>{
  // //     return e==todo;
  // //   }));
  // // }
  // // const onDoneDelete = (todo)=>{
  // //   console.log("onDelete Fired here for", todo)
  // //   setTodos(doneTodos.filter((e)=>{
  // //     return e!==todo;
  // //   }));
  // // }

  const onDelete = (todo)=>{
    // // For Debug
    // console.log("onDelete Fired here for", todo)
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }


  const addTodo = (title, des)=>{

    // // For Debug
    // console.log("I am adding a todo", title, des)
    let sno;
    if(todos.length===0){
      sno = 1;
    }
    else{
      sno = todos[todos.length-1].sno +1;
    }
    const addedTodo = {
      sno: sno,
      title: title,
      des: des
    }
    setTodos([...todos, addedTodo])

    // // For Debug
    // console.log(addedTodo)
  }
  const [todos, setTodos] = useState(initTodo)
  // const [doneTodos, setDoneTodos] = useState([])

  useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
    <Router>
        <Header title="Todos List" searchBar={false}/> {/*You can edit the title and add the searchbar from here*/}
      <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
              <AddTodos addTodo={addTodo}/>
              <Todos todos={todos} onDelete={onDelete} /*onDone={onDone}*//>
              {/* <Done doneTodos={doneTodos} onDelete={onDoneDelete}/> */}
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
      </Switch>
      <Footer/>

    </Router>
    </>
  );
}

export default App;