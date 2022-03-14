import React from "react";
import Todo from "./Todo.js";

export default function Todos(props) {

  let sendData = (index) =>{
    props.sendData(index)
  }
  let deleteTask = (index) =>{
    props.deleteTask(index)
  }


  return (
    <ul className="todo__items" id="todo__items">
      {props.todo.map((t, i) => (
        <Todo key={i} todo={t} sendData={sendData} deleteTask={deleteTask}/>
      ))}
    </ul>
  );
}
