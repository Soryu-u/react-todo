import "../css/todo.css";

import axios from "axios";

import trash from "../img/icons8-trash.svg";

const baseURL = "http://10.177.1.5:8000/";

export default function Todo(props) {



  function getDate(data) {
    if (data) {
      let taskDate = new Date(data);
      function month() {
        return taskDate.getMonth() + 1 > 9
          ? taskDate.getMonth() + 1
          : `0${taskDate.getMonth() + 1}`;
      }
      function day() {
        return taskDate.getDate() > 9
          ? taskDate.getDate()
          : `0${taskDate.getDate()}`;
      }
      let date = `${day()}.${month()}.${taskDate.getFullYear()}`;
      return date;
    } else {
      return "";
    }
  }

  function isOverdue(data) {
    if (data) {
      let currentDate = new Date().setHours(0, 0, 0, 0, 0);
      let taskDate = new Date(data).setHours(0, 0, 0, 0, 0);

      if (taskDate < currentDate) {
        return true;
      } 
    }
  }


  let changeHandler = event => {
    let changedTask = {
      ...props.todo,
      done: event.target.checked
    }
    props.sendData(changedTask)

    
  }

  function deleteTask(data){
    let url= `${baseURL}lists/${data.list_id}/tasks/${data.id}`
    console.log('delete ' + url);
  }

  return (
    <li className={`todo__item ${props.todo.done ? "done" : ""}`}>
      <div className="task__header">
        <input
          type="checkbox"
          className="todo__checkbox"
          defaultChecked={props.todo.done}
          onChange={changeHandler}
        />
        <p className={`task__body ${props.todo.done ? "checked" : ""}`}>
          {props.todo.title}
        </p>
        <button className="delete__btn">
          <img src={trash} alt="delete" onClick={() => deleteTask(props.todo)}/>
        </button>
      </div>
      <div className="task__content ">
        <p className="task__description">{props.todo.description}</p>
        <p className={`task__date ${isOverdue(props.todo.due_date) && !props.todo.done ? 'overdue__task' : ''} `}>
          {getDate(props.todo.due_date)}
        </p>
      </div>
    </li>
  );
}
